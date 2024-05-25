export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}
type UserRolesStatuses = Record<UserRole, string>;
const RoleDescription: UserRolesStatuses = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};

console.log(RoleDescription[UserRole.admin]);
console.log(RoleDescription[UserRole.editor]);
console.log(RoleDescription[UserRole.guest]);
