import type { ISuperAdminProfile } from "@/shared/types";

interface IloginRoleConfig {
  superAdminData?: ISuperAdminProfile
}
export const ensureSuperAdminRoleHasValidLogic = (config: IloginRoleConfig) => {

  return {
    execute(): boolean {
      if (config.superAdminData?.role == 'super-admin') return true;
      else return false;
    }
  }
}
