module.exports = {
  hooks: {
    readPackage,
  },
};

function readPackage(pkg) {
  if (pkg.dependencies && pkg.dependencies.typescript) {
    pkg.dependencies.typescript = "^3.9.1-rc";
  }

  if (pkg.devDependencies && pkg.devDependencies.typescript) {
    pkg.devDependencies.typescript = "^3.9.1-rc";
  }

  if (pkg.peerDependencies && pkg.peerDependencies.typescript) {
    pkg.peerDependencies.typescript = "^3.9.1-rc";
  }

  return pkg;
}
