const scrumRole = {
  holdsMeetings: false,
  teams: ["Team1", "Team2"],
};

const productOwnerRole = {
  holdsMeetings: true,
  reportsTo: "upperManagement",
};

export function mergeRoles<T extends object, U extends object>(
  role1: T,
  role2: U
): T & U {
  return { ...role1, ...role2 };
}

const scrumProductOwnerRole = mergeRoles(scrumRole, productOwnerRole);
console.debug({ scrumProductOwnerRole });
console.debug(scrumProductOwnerRole.reportsTo);
