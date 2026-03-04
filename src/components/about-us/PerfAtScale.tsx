import { Container } from '@/layouts';
import { performanceList as defaultPerformanceList } from '@/static/data';
import React from 'react';

// define a reusable type for a single performance item
export interface PerformanceItem {
    id: number | string;
    title: string;
    text: string;
    stat: string;
    icon?: string;
}

// props accepted by the component: an optional array of items
export interface PerfAtScaleProps {
    items?: PerformanceItem[]; // if omitted, we'll fall back to the default list
}

// functional component with explicit props type
export default function PerformanceAtScale({
    items = defaultPerformanceList,
}: PerfAtScaleProps) {
    return (
        <div>
            <Container>
                <div className="my-8 space-y-2 text-center">
                    <h2 className='font-bold text-2xl'>PERFORMANCE AT SCALE</h2>
                    <h4 className="text-lg text-gray-700 font-semibold">Built for utilities of any size</h4>
                </div>
                <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
                    {items.map((item) => (
                        <div key={item.id} className="items-center text-center p-6 border rounded-lg shadow">
                            {item.icon && (
                                <img src={item.icon} alt={item.title} className="mx-auto h-16 w-16" />
                            )}
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-700">{item.text}</p>
                            <p className="text-gray-600">{item.stat}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
