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
        font-size: 200%
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

@media (max-height: 849px) 
  nav > a
    font-size: 175%

@media (max-height: 800px) 
  nav > a
    font-size: 150%

@media (max-height: 749px) 
  nav > a
    font-size: 125%

@media (max-height: 724px)
  nav > a
    font-size: 100%

/* For smaller screens (phones) */
@media (max-width: 720px) 
    .col-3 
      display: none
    
    .col-9 
      width: 100%
    
    .full-height-section 
      font-size: 1.5rem

/* For Iphopne X */
@media (max-width: 1125px) and (max-height: 2436px) 
    .col-3 
      display: none
    
    .col-9 
      width: 100%
    
    .full-height-section 
      font-size: 1.5rem

/* For Redmi 7 */
@media (max-width: 720px) and (max-height: 1520px) 
    .col-3 
      display: none
    
    .col-9 
      width: 100%
    
    .full-height-section 
      font-size: 1.5rem
</style>