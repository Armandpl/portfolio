<template>
    <div class="theme-container">
        <Nav/>
        <component class="main-content" :is="layout" />        
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Home from './layouts/Home.vue';
import Project from './layouts/Project.vue';

export default {
    components: {
        Home, Project, Nav
    },
    computed: {
        layout() {
            const { path } = this.$page

            console.log(path);

            if(path === '/'){
                return 'Home'
            }
            else {
                return 'Project'
            }
        }
    }
}
</script>

<style lang="stylus">
    @import './styles/theme.styl';
</style>