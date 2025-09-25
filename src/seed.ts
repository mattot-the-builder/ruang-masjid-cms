import { Config } from 'payload'

export const seed: NonNullable<Config['onInit']> = async (payload): Promise<void> => {
  const masjid1 = await payload.create({
    collection: 'mosques',
    data: {
      name: 'Masjid Contoh 1',
      coordinate: [10, 20],
      bankAccounts: [
        { bankName: 'Maybank', accountHolderName: 'Masjid Contoh 1', accountNumber: '01010101010' },
        { bankName: 'CIMB', accountHolderName: 'Masjid Contoh 1', accountNumber: '01010101010' },
        {
          bankName: 'Public Bank',
          accountHolderName: 'Masjid Contoh 1',
          accountNumber: '01010101010',
        },
      ],
    },
  })

  const masjid2 = await payload.create({
    collection: 'mosques',
    data: {
      name: 'Masjid Contoh 2',
      coordinate: [20, 10],
      bankAccounts: [
        { bankName: 'Maybank', accountHolderName: 'Masjid Contoh 2', accountNumber: '01010101010' },
        { bankName: 'CIMB', accountHolderName: 'Masjid Contoh 2', accountNumber: '01010101010' },
        {
          bankName: 'Public Bank',
          accountHolderName: 'Masjid Contoh 2',
          accountNumber: '01010101010',
        },
      ],
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
  console.log('Seeded superAdmin: ', superAdmin.email, superAdmin.password)
}
