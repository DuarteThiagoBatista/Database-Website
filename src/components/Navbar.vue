<template>
  <nav>
    <RouterLink to="/">Definição</RouterLink>
    <RouterLink to="/importancia">Importância</RouterLink>
    <RouterLink to="/gerenciadores">Gerenciadores</RouterLink>
    <RouterLink to="/modelos">Modelos</RouterLink>
    <RouterLink to="/aplicacoes">Aplicações</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav {
  margin-left: -1rem;
  font-size: 1rem;

  padding: 1rem 0;
  margin-top: 1rem;
}
</style>