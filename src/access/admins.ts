import type { AccessArgs } from 'payload/config';

import { checkRole } from './checkRole';

type isAdmin = (args: AccessArgs) => boolean;

export const admins: isAdmin = ({ req: { user } }) => {
  return user !== null && checkRole(['admin'], user);
};
