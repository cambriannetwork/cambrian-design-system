import { useState } from 'react'
import { Button, Card, CardBody, CardHeader } from 'cambrian-ds'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Cambrian Design System Showcase</h1>

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
                <Button variant="primary" onClick={() => setCount(count + 1)}>
                  Count: {count}
                </Button>
              </div>
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