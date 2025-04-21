<template>
<center>
    <img src="../assets/logo.svg" class="logo" />
    <h1>Yasaki74</h1>
    <p><span>Front/Back End Developer</span> In Vietnam</p>
    <nav>
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Services</a>
        <a href="#">Skills</a>
        <a href="#">Education</a>
        <a href="#">Experience</a>
        <a href="#">Recent Work</a>
        <a href="#">Contacts</a>
    </nav>
    <hr>
    <p>
        © Copyright 2025 All rights reserved. <br>
        Made with <b id="vuejs">VueJS</b> | <b id="boostrap">Bootstrap</b> | <b id="sass">Sass</b> <br>
        Created by <strong>Yasaki74</strong> <br>
    </p>
</center>
</template>
  
<script setup>
</script>

<style scoped lang="sass">
.logo
    width: 50%
    margin: 20% 0%

span
    color: cyan

nav
    a
        display: block
        text-decoration: none
        color: black
    a:hover
        color: white
        text-decoration: underline

#vuejs
    background: radial-gradient(circle,rgba(79, 172, 209, 1) 0%, rgba(87, 199, 133, 1) 60%)
    -webkit-background-clip: text
    color: transparent
#boostrap
    background: linear-gradient(90deg,rgba(199, 87, 167, 1) 0%, rgba(110, 46, 91, 1) 60%)
    -webkit-background-clip: text
    color: transparent
#sass
    background: linear-gradient(90deg,rgba(209, 0, 87, 1) 40%, rgba(255, 79, 152, 1) 100%)
    -webkit-background-clip: text
    color: transparent
</style>