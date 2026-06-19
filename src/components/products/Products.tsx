'use client'
import { PageHeader } from '@/components/partials'
import { Container } from '@/layouts'
import Aos from 'aos';
import { Btn } from '../partials/cta-button';
import { useEffect, useState, useRef } from 'react';


export default function Products() {
    const tabsRef = useRef<HTMLDivElement>(null);
    const [activeTab, setActiveTab] = useState('smartpower');
    const tabs = [
        { id: 'smartpower', label: 'Smart Power' },
        { id: 'quickcash', label: 'QuickCash' },
        { id: 'quickpay', label: 'QuickPay' },
        { id: 'postpaid', label: 'Postpaid Billing' },
        // { id: 'analytics', label: 'SPI/Analytics' },
        { id: 'smartbilling', label: 'Smart Power Billing' },
        { id: 'smartvending', label: 'Smart Power Vending' },
        { id: 'revenueassurance', label: 'Revenue Assurance Analytics' },
        { id: 'energytheftmgt', label: 'Energy Theft Management' },
    ];
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div>
            <div className="my-20">
                <Container>
                    <div className="text-center mb-12">
                        <h2 className='font-bold items-center text-2xl'>Our Products</h2>
                        <h2 className='font-bold items-center text-2xl'>
                            Enterprise-grade utility management  │
                            │   platforms built for scale</h2>
                    </div>
                    <div
                        ref={tabsRef}
                        className="
                                flex gap-4 w-full mb-8 pb-2
                                overflow-x-auto overflow-y-hidden
                                whitespace-nowrap
                                scrollbar-hide
                                cursor-grab active:cursor-grabbing
                                select-none"
                    >
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    px-6 py-3 font-semibold transition
                                    flex-shrink-0 w-[200px] sm:w-auto
                                    ${activeTab === tab.id
                                        ? 'bg-blue-950 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }
                            `}
                                data-aos="zoom-out"
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-8">
                        {activeTab === 'smartpower' && (
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-950 pl-6">
                                    <h3 className="text-3xl font-bold text-blue-900 mb-2">
                                        Smart Power
                                    </h3>
                                    <h4 className="text-xl font-semibold text-primary italic mb-4">
                                        Utility Billing & Customer Information System
                                    </h4>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                    <div className='w-full' data-aos='zoom-out'>
                                        <img src="/images/smartpower.jpg" alt="smartpower"
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className='text-gray-700 leading-relaxed text-lg' data-aos='zoom-in'>
                                        <p className='text-black'>Our flagship utility management platform providing comprehensive billing infrastructure and Customer Information System (CIS). Supports multiple billing methodologies including feeder-wise, district-wise, transformer-level, and availability-based billing.</p>
                                        <ul className='list-disc list-inside'>
                                            <h1 className='text-black font-semibold'>Key Features:</h1>
                                            <li>Comprehensive billing infrastructure</li>
                                            <li>Customer Information System (CIS)</li>
                                            <li>Multiple billing methodologies (feeder-wise, district-wise, transformer-level)</li>
                                            <li>Availability-based billing support</li>
                                            <li>Manages millions of customers with accuracy</li>
                                            <li>Deep integration across utility value chain</li>
                                            <li>Scalable for large distribution networks</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Btn
                                        title='Learn More'
                                    />
                                </div>
                            </div>
                        )}

                        {activeTab === 'quickcash' && (
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-950 pl-6">
                                    <h3 className="text-3xl font-bold text-blue-900 mb-2">
                                        QuickCash
                                    </h3>
                                    <h4 className="text-xl font-semibold text-primary italic mb-4">
                                        Collection & Third-Party Payment Network Platform
                                    </h4>
                                </div>
                                {/* <p className="text-gray-700 leading-relaxed text-lg">
                                    QuickCash is a robust collection and payment network platform designed for utility companies and service providers. It includes a powerful sub-account module for comprehensive debt management, supports third-party vendor integrations, and provides real-time analytics through its built-in SPI/reporting engine. QuickCash serves as the financial backbone for vending, collection, and revenue assurance operations.
                                </p> */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                    <div className='w-full' data-aos='zoom-out'>
                                        <img src="/quick-cash.png" alt="smartpower"
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className='text-gray-700 leading-relaxed text-lg' data-aos='zoom-in'>
                                        <p className='text-black'>Robust collection and payment network platform designed for utility companies. Includes powerful sub-account module for comprehensive debt management, third-party vendor integrations, and real-time analytics through built-in SPI/reporting engine.</p>
                                        <ul className='list-disc list-inside'>
                                            <h1 className='text-black font-semibold'>Key Features:</h1>
                                            <li>Financial backbone for vending operations</li>
                                            <li>Collection and revenue assurance</li>
                                            <li>Sub-account module for debt management</li>
                                            <li>Third-party vendor integrations</li>
                                            <li>Real-time analytics and reporting</li>
                                            <li>Built-in SPI/reporting engine</li>
                                            <li>Multi-channel payment processing</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Btn
                                        title='Learn More'
                                    />
                                </div>
                            </div>
                        )}

                        {activeTab === 'quickpay' && (
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-950 pl-6">
                                    <h3 className="text-3xl font-bold text-blue-900 mb-2">
                                        QuickPay
                                    </h3>
                                    <h4 className="text-xl font-semibold text-primary italic mb-4">
                                        STS Token-Based & AMI Vending Platform
                                    </h4>
                                </div>
                                {/* <p className="text-gray-700 leading-relaxed text-lg">
                                    QuickPay is our multi-mode vending platform supporting both Standard Transfer Specification (STS) token-based prepaid meters and Advanced Metering Infrastructure (AMI) smart meters. AMI-enabled vending allows remote connect/disconnect, wallet-based energy control, and automated credit threshold management — eliminating the need for physical token distribution while improving customer experience and collection rates.
                                </p> */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                    <div className='w-full' data-aos='zoom-out'>
                                        <img src="/quick-pay.png" alt="smartpower"
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className='text-gray-700 leading-relaxed text-lg' data-aos='zoom-in'>
                                        <p className='text-black'>Multi-mode vending platform supporting both Standard Transfer Specification (STS) token-based prepaid meters and Advanced Metering Infrastructure (AMI) smart meters. Enables remote connect/disconnect, wallet-based energy control, and automated credit threshold management.</p>
                                        <ul className='list-disc list-inside'>
                                            <h1 className='text-black font-semibold'>Key Features:</h1>
                                            <li> STS-compliant token generation</li>
                                            <li> AMI smart meter support</li>
                                            <li>Remote connect/disconnect capability</li>
                                            <li>Wallet-based energy control</li>
                                            <li>Automated credit threshold management</li>
                                            <li>No physical token distribution needed</li>
                                            <li> Improved customer experience</li>
                                            <li> Higher collection rates</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Btn
                                        title='Learn More'
                                    />
                                </div>
                            </div>
                        )}

                        {activeTab === 'postpaid' && (
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-950 pl-6">
                                    <h3 className="text-3xl font-bold text-blue-900 mb-2">
                                        Postpaid Billing System
                                    </h3>
                                    <h4 className="text-xl font-semibold text-primary italic mb-4">
                                        Metered & Non-Metered Postpaid Billing
                                    </h4>
                                </div>
                                {/* <p className="text-gray-700 leading-relaxed text-lg">
                                    Our postpaid billing solution handles both metered customers (traditional and digital meter reading) and unmetered customers through availability-based and estimated billing models. It supports pre-billing runs, alignment workflows, multi-level bill generation, and automated bill sheet production — fully configurable to regulatory and tariff requirements across any distribution network.
                                </p> */}
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                    <div className='w-full' data-aos='zoom-out'>
                                        <img src="/images/postpaid4.jpg" alt="smartpower"
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className='text-gray-700 leading-relaxed text-lg' data-aos='zoom-in'>
                                        <p className='text-black'>Comprehensive postpaid billing solution handling both metered customers (traditional and digital meter reading) and unmetered customers through availability-based and estimated billing models.</p>
                                        <ul className='list-disc list-inside'>
                                            <h1 className='text-black font-semibold'>Key Features:</h1>
                                            <li> Metered customer billing (traditional & digital)</li>
                                            <li> Non-metered customer billing</li>
                                            <li>Availability-based billing models</li>
                                            <li>Estimated billing support</li>
                                            <li>Pre-billing runs</li>
                                            <li>Alignment workflows</li>
                                            <li>Multi-level bill generation</li>
                                            <li>Automated bill sheet production</li>
                                            <li>Configurable to regulatory requirements</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Btn
                                        title='Learn More'
                                    />
                                </div>
                            </div>
                        )}

                        {/* {activeTab === 'analytics' && (
                            <div className="space-y-6">
                                <div className="border-l-4 border-blue-950 pl-6">
                                    <h3 className="text-3xl font-bold text-blue-900 mb-2">
                                        SPI / Analytics
                                    </h3>
                                    <h4 className="text-xl font-semibold text-primary italic mb-4">
                                        Vendor Transaction Analytics & Reporting
                                    </h4>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                                    <div className='w-full' data-aos='zoom-out'>
                                        <img src="/images/spi.jpg" alt="smartpower"
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                    <div className='text-gray-700 leading-relaxed text-lg' data-aos='zoom-in'>
                                        <p className='text-black'>Real-time and historical insights into vendor performance, collection trends, customer segments, and revenue patterns. Dashboards provide at-a-glance views of prepaid/postpaid splits, MD vs. non-MD customers, and tariff distributions.</p>
                                        <ul className='list-disc list-inside'>
                                            <h1 className='text-black font-semibold'>Key Features:</h1>
                                            <li>Real-time analytics dashboards</li>
                                            <li>Historical data analysis</li>
                                            <li>Vendor performance tracking</li>
                                            <li>Collection trend analysis</li>
                                            <li>Customer segmentation</li>
                                            <li>Revenue pattern insights</li>
                                            <li>Prepaid/postpaid split views</li>
                                            <li>MD vs. non-MD customer analysis</li>
                                            <li>Feeder-level analysis</li>
                                            <li>Operational intelligence</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <Btn
                                        title='Learn More'
                                    />
                                </div>
                            </div>
                        )} */}

                        {
                            activeTab === 'smartbilling' && (
                                <div className='space-y-6'>
                                    <div className="border-l-4 border-blue-950 pl-6">
                                        <h3 className="text-3xl font-bold text-blue-900 mb-2">
                                            Smart Power Billing System
                                        </h3>
                                        <h4 className="text-xl font-semibold text-primary italic mb-4">
                                            Advanced billing module within the Smart Power ecosystem.
                                        </h4>
                                    </div>
                                    <div>
                                        <p>Advanced billing module within the Smart Power ecosystem.
                                            Handles complex utility billing scenarios including prepaid and
                                            postpaid models, multi-tariff structures, automated invoice
                                            generation, and real-time billing analytics for utility providers.</p>
                                    </div>
                                    <div>
                                        <Btn
                                            title='Learn More'
                                        />
                                    </div>
                                </div>
                            )
                        }
                        {
                            activeTab === 'smartvending' && (
                                <div className='space-y-6'>
                                    <div className="border-l-4 border-blue-950 pl-6">
                                        <h3 className="text-3xl font-bold text-blue-900 mb-2">
                                            Smart Power Vending System
                                        </h3>
                                        <h4 className="text-xl font-semibold text-primary italic mb-4">
                                            Comprehensive prepaid electricity vending solution
                                        </h4>
                                    </div>
                                    <div>
                                        Comprehensive prepaid electricity vending solution. Enables
                                        STS-compliant token generation, multi-channel distribution
                                        (USSD, mobile app, web, POS), real-time transaction processing,
                                        and seamless integration with payment gateways for utility
                                        vendors and distributors.
                                    </div>
                                    <div>
                                        <div>
                                            <Btn
                                                title='Learn More'
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            activeTab === 'revenueassurance' && (
                                <div className='space-y-6'>
                                    <div className="border-l-4 border-blue-950 pl-6">
                                        <h3 className="text-3xl font-bold text-blue-900 mb-2">
                                            Revenue Assurance Analytics
                                        </h3>
                                        <h4 className="text-xl font-semibold text-primary italic mb-4">
                                            Real-time collections, predictive insights, executive clarity
                                        </h4>
                                    </div>
                                    <div>
                                        Comprehensive prepaid electricity vending solution. Enables
                                        STS-compliant token generation, multi-channel distribution
                                        (USSD, mobile app, web, POS), real-time transaction processing,
                                        and seamless integration with payment gateways for utility
                                        vendors and distributors.
                                    </div>
                                    <div>
                                        <div>
                                            <Btn
                                                title='Learn More'
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            activeTab === 'energytheftmgt' && (
                                <div className='space-y-6'>
                                    <div className="border-l-4 border-blue-950 pl-6">
                                        <h3 className="text-3xl font-bold text-blue-900 mb-2">
                                            Energy Theft Management
                                        </h3>
                                        <h4 className="text-xl font-semibold text-primary italic mb-4">
                                            AI-powered energy theft detection leveraging smart meter data and advanced analytics
                                        </h4>
                                    </div>
                                    <div>
                                        AI-powered energy theft detection leveraging smart meter
                                        data and advanced analytics. Real-time tamper alerts,
                                        consumption anomaly detection, transformer-level loss
                                        analysis, and automated field inspection workflows to reduce
                                        non-technical losses and protect revenue.
                                    </div>
                                    <div>
                                        <div>
                                            <Btn
                                                title='Learn More'
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </Container>
            </div>
        </div>
    )
}
