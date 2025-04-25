<template>
<center>
    <img src="../assets/logo.svg" class="logo" />
    <h1>Yasaki74</h1>
    <p><span>Front/Back End Developer</span> In Vietnam</p>
    <nav>
        <button @click="scroll()" href="#">Home</button>
        <button @click="scroll()" href="#">About Me</button>
        <button @click="scroll()" href="#">Services</button>
        <button @click="scroll()" href="#">Skills</button>
        <button @click="scroll()" href="#">Education</button>
        <button @click="scroll()" href="#">Experience</button>
        <button @click="scroll()" href="#">Recent Work</button>
        <button @click="scroll()" href="#">Contacts</button>
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
    width: 45%
    margin: 20% 0%

span
    color: cyan

nav
    button
        display: block
        text-decoration: none
        color: black
        font-size: 200%
        border: none
        background: none

    button:hover
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

@media (max-height: 949px) 
    .logo
        width: 35%
    h1
        font-size: 200%
    p
        font-size: 100%
    nav > button
        font-size: 175%

@media (max-height: 849px) 
    .logo
        width: 35%
    h1
        font-size: 175%
    p
        font-size: 90%
    nav > button
        font-size: 175%

@media (max-height: 800px) 
    .logo
        width: 32.5%
    h1
        font-size: 150%
    p
        font-size: 80%
    nav > button
        font-size: 150%

@media (max-height: 749px) 
    .logo
        width: 30%
    h1
        font-size: 150%
    p
        font-size: 70%
    nav > button
        font-size: 125%

@media (max-height: 724px)
    .logo
        width: 27.5%
    h1
        font-size: 125%
    p
        font-size: 70%
    nav > button
        font-size: 100%
    
</style>