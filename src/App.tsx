import { useState } from 'react'
import {
  Accordion, AccordionItem,
  Alert,
  Avatar,
  Badge,
  Breadcrumb, BreadcrumbItem,
  Button,
  Card, CardBody, CardHeader,
  Checkbox,
  Chip,
  Code,
  DatePicker,
  Divider,
  Input,
  Kbd,
  Link,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,
  Pagination,
  Progress,
  Radio, RadioGroup,
  Select, SelectItem,
  Skeleton,
  Slider,
  Spacer,
  Spinner,
  Switch,
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,
  Tabs, Tab,
  Textarea,
  Tooltip,
  User
} from 'cambrian-ds'

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [sliderValue, setSliderValue] = useState(50)
  const [switchValue, setSwitchValue] = useState(false)

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Cambrian Design System Showcase</h1>
      <p className="text-center text-lg mb-12 opacity-70">Complete catalog of all 40 components</p>

      {/* Buttons Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Buttons</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-3">Button Variants</h3>
              <div className="flex gap-3 flex-wrap">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="tertiary">Tertiary Button</Button>
                <Button variant="danger">Danger Button</Button>
                <Button variant="success">Success Button</Button>
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="lg">Large</Button>
                <Button variant="primary" isDisabled>Disabled</Button>
                <Button variant="primary" isLoading>Loading</Button>
                <Button variant="primary" onClick={() => setCount(count + 1)}>
                  Count: {count}
                </Button>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Form Inputs Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Form Inputs</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Input</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Default Input" placeholder="Enter text..." />
                <Input label="Disabled Input" placeholder="Disabled" isDisabled />
                <Input label="With Description" placeholder="Enter email" description="We'll never share your email" />
                <Input label="Error State" placeholder="Invalid input" isInvalid errorMessage="This field is required" />
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Textarea</h3>
              <Textarea label="Description" placeholder="Enter your description..." />
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Select</h3>
              <Select label="Choose an option" placeholder="Select...">
                <SelectItem key="option1">Option 1</SelectItem>
                <SelectItem key="option2">Option 2</SelectItem>
                <SelectItem key="option3">Option 3</SelectItem>
              </Select>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Checkbox</h3>
              <div className="flex flex-col gap-2">
                <Checkbox defaultSelected>I agree to the terms</Checkbox>
                <Checkbox>Subscribe to newsletter</Checkbox>
                <Checkbox isDisabled>Disabled option</Checkbox>
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Radio Group</h3>
              <RadioGroup label="Select your favorite" defaultValue="option1">
                <Radio value="option1">Option 1</Radio>
                <Radio value="option2">Option 2</Radio>
                <Radio value="option3">Option 3</Radio>
              </RadioGroup>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Switch</h3>
              <Switch isSelected={switchValue} onValueChange={setSwitchValue}>
                Enable notifications
              </Switch>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Slider</h3>
              <Slider
                label="Volume"
                value={sliderValue}
                onChange={(value) => setSliderValue(Array.isArray(value) ? value[0] : value)}
                minValue={0}
                maxValue={100}
                className="max-w-md"
              />
              <p className="text-sm mt-2 opacity-70">Value: {sliderValue}</p>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">DatePicker</h3>
              <DatePicker label="Select date" />
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Data Display Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Data Display</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Avatar</h3>
              <div className="flex gap-3 items-center">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Avatar name="John Doe" />
                <Avatar name="JD" size="sm" />
                <Avatar name="JD" size="lg" />
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">User</h3>
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{ src: "https://i.pravatar.cc/150?u=a042581f4e29026704d" }}
              />
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Badge</h3>
              <div className="flex gap-3 flex-wrap">
                <Badge content="5" color="primary">
                  <Button variant="primary">Notifications</Button>
                </Badge>
                <Badge content="99+" color="danger">
                  <Button variant="secondary">Messages</Button>
                </Badge>
                <Badge content="" color="success" shape="circle">
                  <Avatar name="JD" />
                </Badge>
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Chip</h3>
              <div className="flex gap-2 flex-wrap">
                <Chip>Default</Chip>
                <Chip color="primary">Primary</Chip>
                <Chip color="secondary">Secondary</Chip>
                <Chip color="success">Success</Chip>
                <Chip color="warning">Warning</Chip>
                <Chip color="danger">Danger</Chip>
                <Chip variant="bordered">Bordered</Chip>
                <Chip onClose={() => {}}>Closeable</Chip>
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Code & Kbd</h3>
              <div className="space-y-3">
                <Code>npm install cambrian-ds</Code>
                <div className="flex gap-2 items-center">
                  <span>Press</span>
                  <Kbd>Ctrl</Kbd>
                  <span>+</span>
                  <Kbd>C</Kbd>
                  <span>to copy</span>
                </div>
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Table</h3>
              <Table aria-label="Example table">
                <TableHeader>
                  <TableColumn>NAME</TableColumn>
                  <TableColumn>ROLE</TableColumn>
                  <TableColumn>STATUS</TableColumn>
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                  <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    <TableCell>Paused</TableCell>
                  </TableRow>
                  <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    <TableCell>Active</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Feedback Components */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Feedback</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Alert</h3>
              <div className="space-y-3">
                <Alert variant="info">
                  <div>
                    <h4 className="font-semibold mb-1">Info</h4>
                    <p>This is an informational message</p>
                  </div>
                </Alert>
                <Alert variant="success">
                  <div>
                    <h4 className="font-semibold mb-1">Success</h4>
                    <p>Your action was successful</p>
                  </div>
                </Alert>
                <Alert variant="warning">
                  <div>
                    <h4 className="font-semibold mb-1">Warning</h4>
                    <p>Please review this warning</p>
                  </div>
                </Alert>
                <Alert variant="error">
                  <div>
                    <h4 className="font-semibold mb-1">Error</h4>
                    <p>An error has occurred</p>
                  </div>
                </Alert>
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Progress</h3>
              <div className="space-y-4">
                <Progress value={30} color="primary" showValueLabel label="Loading..." />
                <Progress value={60} color="success" />
                <Progress value={90} color="warning" />
                <Progress isIndeterminate color="primary" label="Processing..." />
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Spinner</h3>
              <div className="flex gap-4 items-center">
                <Spinner />
                <Spinner color="primary" />
                <Spinner color="success" />
                <Spinner size="lg" />
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Skeleton</h3>
              <div className="space-y-3">
                <Skeleton className="rounded-lg">
                  <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="space-y-3">
                  <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                  </Skeleton>
                </div>
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Tooltip</h3>
              <div className="flex gap-3">
                <Tooltip content="This is a tooltip">
                  <Button variant="secondary">Hover me</Button>
                </Tooltip>
                <Tooltip content="Tooltip on top" placement="top">
                  <Button variant="secondary">Top</Button>
                </Tooltip>
                <Tooltip content="Tooltip on right" placement="right">
                  <Button variant="secondary">Right</Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Navigation & Layout */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Navigation & Layout</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Breadcrumb</h3>
              <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
              </Breadcrumb>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Link</h3>
              <div className="flex gap-4">
                <Link href="#">Default Link</Link>
                <Link href="#" color="primary">Primary Link</Link>
                <Link href="#" color="secondary">Secondary Link</Link>
                <Link href="#" isExternal>External Link</Link>
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Tabs</h3>
              <Tabs aria-label="Options">
                <Tab key="photos" title="Photos">
                  <Card>
                    <CardBody>Photos content</CardBody>
                  </Card>
                </Tab>
                <Tab key="music" title="Music">
                  <Card>
                    <CardBody>Music content</CardBody>
                  </Card>
                </Tab>
                <Tab key="videos" title="Videos">
                  <Card>
                    <CardBody>Videos content</CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Pagination</h3>
              <Pagination total={10} initialPage={1} />
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Divider</h3>
              <div className="space-y-4">
                <div>
                  <p>Content above</p>
                  <Divider className="my-4" />
                  <p>Content below</p>
                </div>
              </div>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Spacer</h3>
              <Card>
                <CardBody>
                  <p>Item 1</p>
                  <Spacer y={4} />
                  <p>Item 2 (with spacer above)</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Interactive Components */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Interactive Components</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Accordion</h3>
              <Accordion>
                <AccordionItem key="1" aria-label="Accordion 1" title="What is Cambrian DS?">
                  Cambrian DS is a comprehensive design system built for modern web applications.
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="How do I install it?">
                  Simply run: npm install cambrian-ds
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Is it customizable?">
                  Yes, all components are highly customizable with Tailwind CSS.
                </AccordionItem>
              </Accordion>
            </div>

            <Divider />

            <div>
              <h3 className="text-lg font-medium mb-3">Modal</h3>
              <Button variant="primary" onPress={() => setIsModalOpen(true)}>
                Open Modal
              </Button>
              <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ModalContent>
                  <ModalHeader>Modal Title</ModalHeader>
                  <ModalBody>
                    <p>This is the modal content. You can put any content here.</p>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="secondary" onPress={() => setIsModalOpen(false)}>
                      Close
                    </Button>
                    <Button variant="primary" onPress={() => setIsModalOpen(false)}>
                      Action
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Typography Section */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Typography</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            {/* Font Families */}
            <div>
              <h3 className="text-lg font-medium mb-4">Cambrian DS Fonts</h3>

              <Card className="mb-4">
                <CardBody>
                  <h4 className="font-semibold text-primary mb-3">Primary Font: Figtree</h4>
                  <p className="text-3xl mb-3" style={{ fontFamily: 'Figtree' }}>
                    The quick brown fox jumps over the lazy dog
                  </p>
                  <p className="text-sm opacity-70">Weights: 300-900 (variable font)</p>
                </CardBody>
              </Card>

              <Card className="mb-4">
                <CardBody>
                  <h4 className="font-semibold text-primary mb-3">Monospace Font: IBM Plex Mono</h4>
                  <pre className="text-lg mb-3" style={{ fontFamily: 'IBM Plex Mono', margin: 0 }}>
                    const designSystem = "Cambrian DS";
                  </pre>
                  <p className="text-sm opacity-70">Weights: 400, 500, 600, 700</p>
                </CardBody>
              </Card>

              <Card>
                <CardBody>
                  <h4 className="font-semibold text-primary mb-3">Fallback Stack</h4>
                  <code className="text-sm font-mono bg-primary-50 text-primary-800 p-3 rounded block">
                    Figtree, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif
                  </code>
                </CardBody>
              </Card>
            </div>

            {/* Heading Sizes */}
            <div>
              <h3 className="text-lg font-medium mb-4">Heading Sizes</h3>
              <Card>
                <CardBody>
                  <div className="space-y-4">
                    <h1 className="text-5xl font-bold text-primary">Heading 1 (5xl)</h1>
                    <h2 className="text-4xl font-bold text-primary-700">Heading 2 (4xl)</h2>
                    <h3 className="text-3xl font-bold text-primary-600">Heading 3 (3xl)</h3>
                    <h4 className="text-2xl font-semibold text-secondary">Heading 4 (2xl)</h4>
                    <h5 className="text-xl font-semibold text-secondary-600">Heading 5 (xl)</h5>
                    <h6 className="text-lg font-semibold text-secondary-700">Heading 6 (lg)</h6>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Font Weights */}
            <div>
              <h3 className="text-lg font-medium mb-4">Font Weights with Figtree</h3>
              <Card>
                <CardBody>
                  <div className="space-y-3">
                    <p className="text-lg font-light">Light (300) - Elegant and refined</p>
                    <p className="text-lg font-normal">Normal (400) - Standard body text</p>
                    <p className="text-lg font-medium">Medium (500) - Slightly emphasized</p>
                    <p className="text-lg font-semibold">Semibold (600) - Subheadings</p>
                    <p className="text-lg font-bold">Bold (700) - Strong emphasis</p>
                    <p className="text-lg font-extrabold">Extrabold (800) - Maximum impact</p>
                    <p className="text-lg font-black">Black (900) - Heaviest weight</p>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Body Text */}
            <div>
              <h3 className="text-lg font-medium mb-4">Body Text Sizes</h3>
              <Card>
                <CardBody>
                  <div className="space-y-3">
                    <p className="text-xl">Extra Large (xl) - Feature text</p>
                    <p className="text-lg">Large (lg) - Emphasized body text</p>
                    <p className="text-base">Base (base) - Standard body text</p>
                    <p className="text-sm">Small (sm) - Secondary information</p>
                    <p className="text-xs">Extra Small (xs) - Fine print and labels</p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Cambrian Theme Colors */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Cambrian Design System Colors</h2>
        </CardHeader>
        <CardBody>
          <div className="space-y-6">
            {/* Primary - Green */}
            <div>
              <h3 className="text-lg font-medium mb-3">Primary (Green) - #4b9328</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#ecefd8' }}></div>
                  <p className="text-xs text-center mt-1">50</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#e3eacf' }}></div>
                  <p className="text-xs text-center mt-1">100</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#c8dab1' }}></div>
                  <p className="text-xs text-center mt-1">200</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#adcb94' }}></div>
                  <p className="text-xs text-center mt-1">300</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#78ad59' }}></div>
                  <p className="text-xs text-center mt-1">400</p>
                </div>
                <div>
                  <div className="h-16 rounded border-2 border-black" style={{ backgroundColor: '#4b9328' }}></div>
                  <p className="text-xs text-center mt-1 font-bold">500</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#3b7120' }}></div>
                  <p className="text-xs text-center mt-1">600</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#274717' }}></div>
                  <p className="text-xs text-center mt-1">700</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#1d3212' }}></div>
                  <p className="text-xs text-center mt-1">800</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#131e0e' }}></div>
                  <p className="text-xs text-center mt-1">900</p>
                </div>
              </div>
            </div>

            {/* Secondary - Tan/Brown */}
            <div>
              <h3 className="text-lg font-medium mb-3">Secondary (Tan) - #655b46</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#faf3e3' }}></div>
                  <p className="text-xs text-center mt-1">50</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#f8f0de' }}></div>
                  <p className="text-xs text-center mt-1">100</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#f2e8d0' }}></div>
                  <p className="text-xs text-center mt-1">200</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#ecdfc3' }}></div>
                  <p className="text-xs text-center mt-1">300</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#dfcea7' }}></div>
                  <p className="text-xs text-center mt-1">400</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#d5c090' }}></div>
                  <p className="text-xs text-center mt-1">500</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#a2926e' }}></div>
                  <p className="text-xs text-center mt-1">600</p>
                </div>
                <div>
                  <div className="h-16 rounded border-2 border-black" style={{ backgroundColor: '#655b46' }}></div>
                  <p className="text-xs text-center mt-1 font-bold">700</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#464032' }}></div>
                  <p className="text-xs text-center mt-1">800</p>
                </div>
                <div>
                  <div className="h-16 rounded" style={{ backgroundColor: '#28241d' }}></div>
                  <p className="text-xs text-center mt-1">900</p>
                </div>
              </div>
            </div>

            {/* Success - Green */}
            <div>
              <h3 className="text-lg font-medium mb-3">Success - #3aa746</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {['#eaf1db', '#e1edd3', '#c3e0ba', '#a6d4a1', '#6bbb70', '#3aa746', '#2e8037', '#1f5024', '#18381b', '#102112'].map((color, idx) => (
                  <div key={idx}>
                    <div
                      className={`h-16 rounded ${idx === 5 ? 'border-2 border-black' : ''}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <p className="text-xs text-center mt-1 font-medium">{idx === 5 ? '500' : `${(idx + 1) * 100 - 50}`}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warning - Yellow */}
            <div>
              <h3 className="text-lg font-medium mb-3">Warning - #eac029</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {['#fcf3d8', '#fbf0cf', '#f8e8b1', '#f5df94', '#efce5a', '#eac029', '#b29221', '#6e5b17', '#4d4013', '#2b240e'].map((color, idx) => (
                  <div key={idx}>
                    <div
                      className={`h-16 rounded ${idx === 5 ? 'border-2 border-black' : ''}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <p className="text-xs text-center mt-1 font-medium">{idx === 5 ? '500' : `${(idx + 1) * 100 - 50}`}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Danger - Red */}
            <div>
              <h3 className="text-lg font-medium mb-3">Danger - #dc383b</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {['#fbe6da', '#f9dcd1', '#f4bfb7', '#efa29c', '#e56867', '#dc383b', '#a72c2f', '#681e20', '#481718', '#291011'].map((color, idx) => (
                  <div key={idx}>
                    <div
                      className={`h-16 rounded ${idx === 5 ? 'border-2 border-black' : ''}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <p className="text-xs text-center mt-1 font-medium">{idx === 5 ? '500' : `${(idx + 1) * 100 - 50}`}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cyan */}
            <div>
              <h3 className="text-lg font-medium mb-3">Cyan - #7cccdc</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {['#f1f5ea', '#eaf2ea', '#d7ece7', '#c3e5e5', '#9cd7e0', '#7cccdc', '#5f9ba8', '#3d6168', '#2b4448', '#1a2629'].map((color, idx) => (
                  <div key={idx}>
                    <div
                      className={`h-16 rounded ${idx === 5 ? 'border-2 border-black' : ''}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <p className="text-xs text-center mt-1 font-medium">{idx === 5 ? '500' : `${(idx + 1) * 100 - 50}`}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Magenta */}
            <div>
              <h3 className="text-lg font-medium mb-3">Magenta - #d561b4</h3>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {['#faeae6', '#f8e2e4', '#f2cbdb', '#ecb5d3', '#df87c2', '#d561b4', '#a24b89', '#653156', '#46233c', '#281623'].map((color, idx) => (
                  <div key={idx}>
                    <div
                      className={`h-16 rounded ${idx === 5 ? 'border-2 border-black' : ''}`}
                      style={{ backgroundColor: color }}
                    ></div>
                    <p className="text-xs text-center mt-1 font-medium">{idx === 5 ? '500' : `${(idx + 1) * 100 - 50}`}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Colors */}
            <div>
              <h3 className="text-lg font-medium mb-3">Special Theme Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <div className="h-20 rounded border" style={{ backgroundColor: '#f8f0de' }}></div>
                  <p className="text-sm text-center mt-1">Background (Light)</p>
                  <p className="text-xs text-center text-gray-500">#f8f0de</p>
                </div>
                <div>
                  <div className="h-20 rounded border" style={{ backgroundColor: '#212121' }}></div>
                  <p className="text-sm text-center mt-1">Background (Dark)</p>
                  <p className="text-xs text-center text-gray-500">#212121</p>
                </div>
                <div>
                  <div className="h-20 rounded border" style={{ backgroundColor: '#4b9328' }}></div>
                  <p className="text-sm text-center mt-1">Focus</p>
                  <p className="text-xs text-center text-gray-500">#4b9328</p>
                </div>
                <div>
                  <div className="h-20 rounded border" style={{ backgroundColor: 'rgba(0, 0, 0, 0.30)' }}></div>
                  <p className="text-sm text-center mt-1">Overlay</p>
                  <p className="text-xs text-center text-gray-500">rgba(0,0,0,0.30)</p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Card Examples */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-2xl font-semibold">Card Components</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <h4 className="text-lg font-medium">Basic Card</h4>
              </CardHeader>
              <CardBody>
                <p>This is a simple card with a header and body.</p>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h4 className="text-lg font-medium">Card with Button</h4>
              </CardHeader>
              <CardBody>
                <p>Cards can contain other components.</p>
                <Button variant="primary" className="mt-2">
                  Action
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h4 className="text-lg font-medium">Simple Card</h4>
              </CardHeader>
              <CardBody>
                <p>Clean and minimal card design.</p>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default App