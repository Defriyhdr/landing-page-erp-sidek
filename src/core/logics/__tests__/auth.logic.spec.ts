import { describe, it } from 'vitest'
import { ensureAdminRoleHasValidLogic, loginAdminRedirectLogic } from '../'
import type { ICentralAdminProfile } from '@/shared/types'
import Chance from 'chance'
const chance = Chance()

describe('test admin pusat logic', () => {
  it('case : role admin-pusat', ({ expect }) => {
    const adminPusat: ICentralAdminProfile = {
      email: chance.email(),
      id: chance.android_id(),
      name: chance.name(),
      phone: chance.phone(),
      token: chance.character(),
      perusahaan_id: chance.android_id(),
      role: 'admin-pusat',
      step_installasi_perusahaan: chance.integer()
    }


    const ensureRoleResult = ensureAdminRoleHasValidLogic({ adminData: adminPusat }).execute()
    expect(ensureRoleResult).toBe(true)
  })

  it('case : role operator', ({ expect }) => {
    const operator: ICentralAdminProfile = {
      email: chance.email(),
      id: chance.android_id(),
      name: chance.name(),
      phone: chance.phone(),
      token: chance.character(),
      perusahaan_id: chance.android_id(),
      role: 'operator',
      step_installasi_perusahaan: chance.integer()
    }


    const ensureRoleResult = ensureAdminRoleHasValidLogic({ adminData: operator }).execute()
    expect(ensureRoleResult).toBe(true)
  })
})


describe('test admin login route redirection', () => {
  it('case : belum punya perusahaan redirect to pendaftaran usaha', ({ expect }) => {
    const adminBaru: ICentralAdminProfile = {
      email: chance.email(),
      id: chance.android_id(),
      name: chance.name(),
      phone: chance.phone(),
      token: chance.character(),
      role: 'admin-pusat',
      perusahaan_id: null,
      step_installasi_perusahaan: 0
    }


    const redirectResult = loginAdminRedirectLogic({
      adminData: adminBaru,
      registerUsahaRouteName: { name: 'REGISTER_USAHA_ROUTE_EXAMPLE', },
      dashboardRouteName: { name: 'DASHBOARD_ROUTE_EXAMPLE' },
      installationRouteName: { name: 'INSTALLASI_ROUTE_EXAMPLE' }
    }).execute()

    expect(redirectResult?.name).toBe('REGISTER_USAHA_ROUTE_EXAMPLE')
  })
})
