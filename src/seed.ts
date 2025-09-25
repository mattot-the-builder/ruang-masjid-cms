import { Config } from 'payload'

export const seed: NonNullable<Config['onInit']> = async (payload): Promise<void> => {
  const masjid1 = await payload.create({
    collection: 'mosques',
    data: {
      name: 'Masjid Contoh 1',
      coordinate: [10, 20],
    },
  })

  const masjid2 = await payload.create({
    collection: 'mosques',
    data: {
      name: 'Masjid Contoh 2',
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
  console.log('Seeded superAdmin: ', superAdmin.email, superAdmin.password)
}
