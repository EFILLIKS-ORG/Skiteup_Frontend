import { useState } from 'react';

import { Avatar } from './components/ui/Avatar';
import { Badge } from './components/ui/Badge';
import { SearchBar } from './components/ui/Searchbar';
import { Input } from './components/ui/Input';
import { StarRating } from './components/ui/Starrating';
import { Toast } from './components/ui/Toast';
import { Tabs } from './components/ui/Tabs';

export default function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="flex min-h-screen flex-col gap-4 bg-(--color-background) p-4">
      <Avatar initials="SS" />

      <SearchBar placeholder="Search..." />

      <div className="flex gap-2">
        <Badge>New</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Active</Badge>
        <Badge variant="warning">Pending</Badge>
        <Badge variant="error">Failed</Badge>
        <Badge variant="info">Info</Badge>
      </div>

      <Input label="First Name" placeholder="Enter first name" />

      <Input label="Password" type="password" placeholder="Enter password" />

      <Input
        label="Email"
        type="email"
        placeholder="Enter email"
        helperText="Enter your email address"
      />

      <div>
        <button
          type="button"
          onClick={() => setShowToast(true)}
          className="
            rounded-(--radius-md)
            bg-(--color-secondary)
            px-4
            py-2
            text-(--text-sm)
            font-(--font-weight-medium)
            text-(--color-text-inverse)
            transition-colors
            hover:bg-(--color-hover-secondary)
          "
        >
          Show Toast
        </button>

        {showToast && <Toast message="Successfully completed!" type="success" />}

        {showToast && <Toast message="Deleted successfully" type="error" />}
      </div>

      <StarRating />

      <Tabs
        tabs={[
          {
            id: 'overview',
            label: 'Overview',
          },
          {
            id: 'students',
            label: 'Students',
          },
          {
            id: 'courses',
            label: 'Courses',
          },
          {
            id: 'settings',
            label: 'Settings',
          },
        ]}
      />
    </div>
  );
}
