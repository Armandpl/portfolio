<template>
    <div class="theme-container">
        <Nav/>
        <component class="main-content" :is="layout" style="margin-top: 80px;"/>
    </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Home from './layouts/Home.vue';
import Project from './layouts/Project.vue';
import Resume from './layouts/Resume.vue';
import About from './layouts/About.vue';
import Contact from './layouts/Contact.vue';

export default {
    components: {
        Home, Project, Nav, Resume, About, Contact
    },
    computed: {
        layout() {
            const { path } = this.$page

            console.log(this.$site.pages);

            console.log(path);

            if(path === '/'){
                return 'Home'
            }
            else if(path === '/resume.html'){
                return 'Resume'
            }
            else if(path === "/about.html")
            {
                return 'About'
            }
            else if(path === "/contact.html")
            {
                return 'Contact'
            }
            else
            {
                return 'Project'
            }
        }
    }
}
</script>

<style lang="stylus">
    @import './styles/theme.styl';
</style>