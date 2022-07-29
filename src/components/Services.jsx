import React from 'react';
import education from '../data/education';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';

const Services = () => {
  return (
    <div className="py-12">
    <SectionTitle id="formation">Academic education</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {education.map(service => (
                <ServiceItem
                    key={service.title}
                    title={service.title}
                    subTitle={service.subTitle}
                    icon={service.icon}
                    description={service.description}
                />
            ))}
        </div>
</div>
  )
}

export default Services