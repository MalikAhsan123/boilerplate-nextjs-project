'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import * as React from 'react';
import { createPortal } from 'react-dom';
import {
  getCountryCallingCode,
  isSupportedCountry,
  type Country,
} from 'react-phone-number-input';

import type { DropdownPosition, SearchableCountrySelectProps } from '@/types';

function isSameOptionValue(optionValue?: string, selectedValue?: string) {
  if (!optionValue) {
    return !selectedValue;
  }

  return optionValue === selectedValue;
}

function getDialCodeSearchText(countryCode?: string) {
  if (!countryCode || !isSupportedCountry(countryCode)) {
    return '';
  }

  return getCountryCallingCode(countryCode as Country);
}

export function SearchableCountrySelect({
  value,
  onChange,
  onFocus,
  onBlur,
  options,
  iconComponent: Icon,
  disabled,
  readOnly,
  className,
  'aria-label': ariaLabel,
}: SearchableCountrySelectProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [mounted, setMounted] = React.useState(false);
  const [dropdownPosition, setDropdownPosition] = React.useState<DropdownPosition>({
    top: 0,
    left: 0,
    minWidth: 288,
  });

  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const selectableOptions = React.useMemo(
    () => options.filter((option) => !option.divider),
    [options]
  );

  const selectedOption = React.useMemo(
    () => selectableOptions.find((option) => isSameOptionValue(option.value, value)),
    [selectableOptions, value]
  );

  const filteredOptions = React.useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return selectableOptions;
    }

    return selectableOptions.filter((option) => {
      const countryCode = option.value?.toLowerCase() ?? '';
      const dialCode = getDialCodeSearchText(option.value);

      return (
        option.label.toLowerCase().includes(query) ||
        countryCode.includes(query) ||
        dialCode.includes(query) ||
        `+${dialCode}`.includes(query)
      );
    });
  }, [search, selectableOptions]);

  const closeDropdown = React.useCallback(() => {
    setOpen(false);
    setSearch('');
    onBlur?.();
  }, [onBlur]);

  const openDropdown = React.useCallback(() => {
    if (disabled || readOnly) {
      return;
    }

    setOpen(true);
    onFocus?.();
  }, [disabled, onFocus, readOnly]);

  const updateDropdownPosition = React.useCallback(() => {
    if (!triggerRef.current) {
      return;
    }

    const rect = triggerRef.current.getBoundingClientRect();

    setDropdownPosition({
      top: rect.bottom + 4,
      left: rect.left,
      minWidth: Math.max(rect.width, 288),
    });
  }, []);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useLayoutEffect(() => {
    if (!open) {
      return;
    }

    updateDropdownPosition();
    searchInputRef.current?.focus();

    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (triggerRef.current?.contains(target) || dropdownRef.current?.contains(target)) {
        return;
      }

      closeDropdown();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    window.addEventListener('resize', updateDropdownPosition);
    window.addEventListener('scroll', updateDropdownPosition, true);
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', updateDropdownPosition);
      window.removeEventListener('scroll', updateDropdownPosition, true);
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeDropdown, open, updateDropdownPosition]);

  const handleSelect = (optionValue?: string) => {
    onChange(optionValue);
    closeDropdown();
  };

  const dropdown =
    open && mounted
      ? createPortal(
          <div
            ref={dropdownRef}
            className="phone-field-country-dropdown"
            style={{
              top: dropdownPosition.top,
              left: dropdownPosition.left,
              minWidth: dropdownPosition.minWidth,
            }}
          >
            <div className="border-b border-input p-2">
              <div className="relative">
                <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  ref={searchInputRef}
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search country..."
                  aria-label="Search country"
                  className="h-8 pl-8"
                  onMouseDown={(event) => event.stopPropagation()}
                />
              </div>
            </div>
            <ul
              role="listbox"
              aria-label={ariaLabel ?? 'Countries'}
              className="max-h-60 overflow-y-auto p-1"
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <li key={option.value ?? 'international'} role="presentation">
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSameOptionValue(option.value, value)}
                      onClick={() => handleSelect(option.value)}
                      className={cn(
                        'flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-sm transition-colors hover:bg-muted',
                        isSameOptionValue(option.value, value) && 'bg-muted'
                      )}
                    >
                      <Icon aria-hidden country={option.value} label={option.label} />
                      <span className="min-w-0 flex-1 truncate">{option.label}</span>
                      {option.value ? (
                        <span className="shrink-0 text-muted-foreground">
                          +{getDialCodeSearchText(option.value)}
                        </span>
                      ) : null}
                    </button>
                  </li>
                ))
              ) : (
                <li className="px-3 py-6 text-center text-sm text-muted-foreground">
                  No countries found
                </li>
              )}
            </ul>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div className={cn('PhoneInputCountry phone-field-country-select', className)}>
        <button
          ref={triggerRef}
          type="button"
          aria-label={ariaLabel ?? 'Select country'}
          aria-haspopup="listbox"
          aria-expanded={open}
          disabled={disabled || readOnly}
          onClick={() => (open ? closeDropdown() : openDropdown())}
          className="flex h-full items-center gap-1.5 outline-none disabled:cursor-not-allowed"
        >
          {selectedOption ? (
            <Icon aria-hidden country={value} label={selectedOption.label} />
          ) : null}
          <div className="PhoneInputCountrySelectArrow" aria-hidden="true" />
        </button>
      </div>
      {dropdown}
    </>
  );
}
