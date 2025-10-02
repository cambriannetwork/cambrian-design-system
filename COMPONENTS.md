# Cambrian Design System - Component Catalog

Complete list of all components available in the Cambrian Design System (cambrian-ds v2.1.1).

## Components

### Layout & Structure
- **Card** - Container component with header and body sections
- **Divider** - Visual separator between content sections
- **Header** - Page or section header component
- **Spacer** - Flexible spacing component
- **ScrollShadow** - Container with scroll shadows

### Navigation
- **Breadcrumb** - Hierarchical navigation trail
- **Link** - Styled anchor component
- **Pagination** - Page navigation control
- **Tabs** - Tabbed content switcher

### Buttons & Actions
- **Button** - Primary interactive button with multiple variants
- **Dialog** - Modal dialog with actions
- **Dropdown** - Dropdown menu component
- **Modal** - Overlay modal window
- **Popover** - Contextual popup component

### Form Inputs
- **Checkbox** - Single checkbox input
- **DatePicker** - Date selection input
- **Input** - Text input field
- **NumberInput** - Numeric input with controls
- **Radio** - Radio button input
- **Select** - Dropdown select input
- **Slider** - Range slider input
- **Switch** - Toggle switch
- **Textarea** - Multi-line text input
- **TimeInput** - Time selection input

### Data Display
- **Avatar** - User avatar image
- **Badge** - Status or count indicator
- **Chip** - Compact element for tags/labels
- **Code** - Inline code display
- **Image** - Enhanced image component
- **Kbd** - Keyboard key display
- **Table** - Data table component
- **User** - User profile display

### Feedback
- **Alert** - Alert/notification message
- **Progress** - Progress bar indicator
- **Skeleton** - Loading placeholder
- **Spinner** - Loading spinner
- **Toast** - Temporary notification popup
- **Tooltip** - Hover tooltip

### Interactive
- **Accordion** - Collapsible content sections
- **Listbox** - Selectable list component

## Color System

### Primary Colors
- **Primary (Green)**: `#4b9328` - Main brand color with 50-900 scale
- **Secondary (Tan)**: `#655b46` - Secondary brand color with 50-900 scale

### Semantic Colors
- **Success**: `#3aa746` - Green for success states
- **Warning**: `#eac029` - Yellow for warnings
- **Danger**: `#dc383b` - Red for errors and destructive actions
- **Cyan**: `#7cccdc` - Info and accent color
- **Magenta**: `#d561b4` - Accent color

### Theme Colors
- **Background (Light)**: `#f8f0de`
- **Background (Dark)**: `#212121`
- **Focus**: `#4b9328` (Primary green)
- **Overlay**: `rgba(0, 0, 0, 0.30)`

## Typography

### Font Families
- **Primary**: Figtree (300-900 variable font)
- **Monospace**: IBM Plex Mono (400, 500, 600, 700)
- **Fallback**: Figtree, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif

### Font Weights
- Light: 300
- Normal: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extrabold: 800
- Black: 900

### Text Sizes
- Extra Small (xs): Fine print and labels
- Small (sm): Secondary information
- Base: Standard body text
- Large (lg): Emphasized body text
- Extra Large (xl): Feature text
- 2xl-5xl: Heading sizes

## Usage

```tsx
import { Button, Card, CardHeader, CardBody } from 'cambrian-ds'

function Example() {
  return (
    <Card>
      <CardHeader>
        <h2>Card Title</h2>
      </CardHeader>
      <CardBody>
        <p>Card content goes here</p>
        <Button variant="primary">Action</Button>
      </CardBody>
    </Card>
  )
}
```

## Version

This catalog reflects **cambrian-ds v2.1.1** as installed in this project.

## Resources

- Package: `cambrian-ds` on npm
- Version: 2.1.1
- Total Components: 40
