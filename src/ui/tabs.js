import React, { useState } from "react";

export function Tabs({ defaultValue, children }) {
  const [value, setValue] = useState(defaultValue);
  const triggerGroup = React.Children.toArray(children).find(child => child.type === TabsList);
  const contents = React.Children.toArray(children).filter(child => child.type === TabsContent);

  return (
    <div>
      {React.cloneElement(triggerGroup, { value, onChange: setValue })}
      {contents.map(content =>
        content.props.value === value ? content : null
      )}
    </div>
  );
}

export function TabsList({ children, value, onChange }) {
  return (
    <div className="flex space-x-2 mb-4">
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          isActive: child.props.value === value,
          onClick: () => onChange(child.props.value)
        })
      )}
    </div>
  );
}

export function TabsTrigger({ children, value, isActive, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${isActive ? 'bg-[#FF0040] text-white' : 'bg-[#2a2a2e] text-gray-300'} ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div>{children}</div>;
}
