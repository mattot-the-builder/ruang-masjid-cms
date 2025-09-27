import { Config } from 'payload'

export const seed: NonNullable<Config['onInit']> = async (payload): Promise<void> => {
    const masjid1 = await payload.create({
        collection: 'mosques',
        data: {
            name: 'Masjid Putra',
            slug: 'masjid-putra',
            address: {
                addressLine1: 'Persiaran Perdana',
                postcode: '62502',
                district: 'Presint 1',
                state: 'W.P. Putrajaya',
            },
            contact: {
                telephone: '03-88885678',
                socialMedia: [
                    {
                        platform: "facebook",
                        url: "https://fb.com"
                    },
                    {
                        platform: "tiktok",
                        url: "https://tiktok.com"
                    },
                ]
            },
            bankAccounts: [
                { bankName: 'Maybank', accountHolderName: 'Masjid Putra', accountNumber: '01010101010' },
                { bankName: 'CIMB', accountHolderName: 'Masjid Putra', accountNumber: '01010101010' },
                {
                    bankName: 'Public Bank',
                    accountHolderName: 'Masjid Putra',
                    accountNumber: '01010101010',
                },
            ],
            coordinate: [10, 20],
        },
    })

    const masjid2 = await payload.create({
        collection: 'mosques',
        data: {
            name: 'Masjid Sultan Idris Shah II',
            slug: 'masjid-sultan-idris-shah-ii',
            address: {
                addressLine1: 'Jalan Panglima Bukit Gantang Wahab',
                postcode: '31650',
                district: 'Ipoh',
                state: 'Perak',
            },
            contact: {
                telephone: '0135237989',
                socialMedia: [
                    {
                        platform: "facebook",
                        url: "https://fb.com"
                    },
                    {
                        platform: "tiktok",
                        url: "https://tiktok.com"
                    },
                ]
            },
            bankAccounts: [
                {
                    bankName: 'Maybank',
                    accountHolderName: 'Masjid Sultan Idris Shah II',
                    accountNumber: '01010101010',
                },
                {
                    bankName: 'CIMB',
                    accountHolderName: 'Masjid Sultan Idris Shah II',
                    accountNumber: '01010101010',
                },
                {
                    bankName: 'Public Bank',
                    accountHolderName: 'Masjid Sultan Idris Shah II',
                    accountNumber: '01010101010',
                },
            ],
            coordinate: [20, 10],
        },
    })

    const superAdmin = await payload.create({
        collection: 'users',
        data: {
            email: 'superadmin@ruang-masjid.test',
            roles: ['super-admin'],
            password: 'password',
        },
    })

    console.log('Seeded masjid: ', masjid1.name, masjid2.name)
    console.log('Seeded superAdmin: ', superAdmin.email)
}
