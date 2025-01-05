"use client";

import { Input } from "@/components/ui/input";
import { useState, useCallback } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (jobId: string) => void;
  inputValue: string;
}

export function SearchBar({ onSearch, inputValue }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState(inputValue);
  const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  const handleSearch = useCallback(
    (searchTerm: string) => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
      const timeoutId = setTimeout(() => {
        onSearch(searchTerm);
      }, 500);
      setDebounceTimeout(timeoutId);
    },
    [debounceTimeout, onSearch]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Search className=" absolute right-2 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer" />
      <Input
        type="text"
        placeholder="Search by Job ID..."
        value={searchTerm}
        onChange={handleChange}
        className="pl-8"
      />
    </form>
  );
}
