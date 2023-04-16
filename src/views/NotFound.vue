<template>
    <section class="section-404">
        <div class="container">
            <div class="section-header">
                <h1 class="section-title">Page not found</h1>
                <router-link :to="{ name: 'home' }">Go home</router-link>
            </div>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'NotFoundView',
};
</script>
