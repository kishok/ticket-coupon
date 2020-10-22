import faker from 'faker';

export const TicketMetaData = () => {
    return {
        correlationID: faker.random.uuid(),
        parentEventCode: '',
        eventCode: faker.random.arrayElement(['1001', '1002', '1003']),
        eventTimeInMillis: faker.time.recent(),
        tenantId:'SG',
        propertyId:'512',
        eventSourceID: faker.random.arrayElement(["C000000001","C000000002","C000000003"]),
        version:'1.0'
    };
};