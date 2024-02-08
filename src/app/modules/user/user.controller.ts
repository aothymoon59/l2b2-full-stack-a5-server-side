import catchAsync from '../../utils/catchAsync';

import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  await UserServices.createUserIntoDb(req.body, res);
});
const loginUser = catchAsync(async (req, res) => {
  await UserServices.loginUser(req.body, res);
});

export const UserController = { createUser, loginUser };
