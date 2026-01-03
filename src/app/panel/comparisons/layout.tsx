
'use client';

export default function ComparisonsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <div className="flex flex-col gap-6">
            {children}
        </div>
    );
  }
