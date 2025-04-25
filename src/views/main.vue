<template>
     <div class="container-fluid">
        <div class="row">
            <div :class="['col-3', { hidden: !isSidebarVisible }]">
                <button v-if="!isSidebarVisible" @click="toggleSidebar" class="btn btn-secondary toggle-btn">-></button>
                <button v-if="isSidebarVisible" @click="toggleSidebar" class="btn btn-secondary toggle-btn"><-</button>
                <sideBar />
            </div>
            <div :class="{'col-9': isSidebarVisible, 'col-12': !isSidebarVisible}" ref="contentWrapper">
                <section id="section-0" class="full-height-section">
                    <h2>Section 1</h2><br>
                    <p>Content of section 1...</p>
                </section>
                <section id="section-1" class="full-height-section">
                    <h2>Section 2</h2><br>
                    <p>Content of section 2...</p>
                </section>
                <section id="section-2" class="full-height-section">
                    <h2>Section 3</h2><br>
                    <p>Content of section 3...</p>
                </section>
            </div>
        </div>
    </div>
</template>
<script setup>
import sideBar from '@/components/sideBar.vue'
import { ref } from 'vue'
const contentWrapper = ref(null)
const currentSection = ref(0)
const isSidebarVisible = ref(true)

function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value;
}

function scrollToSection(index) {
    if (contentWrapper.value) {
        const element = document.getElementById(`section-${index}`)
        if (element) {
        contentWrapper.value.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        })
        currentSection.value = index
        }
    }
}

function scrollDown() {
    const nextSection = currentSection.value + 1
    const maxSections = contentWrapper.value ? contentWrapper.value.children.length - 1 : 0
    if (nextSection <= maxSections) {
        scrollToSection(nextSection)
    }
}

function scrollUp() {
    const previousSection = currentSection.value - 1
    if (previousSection >= 0) {
        scrollToSection(previousSection)
    }
}

function handleScroll(event) {
    const delta = Math.sign(event.deltaY)
    if (delta > 0) {
        scrollDown()
    } else if (delta < 0) {
        scrollUp()
    }
}

function handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
        scrollDown()
    } else if (event.key === 'ArrowUp') {
        scrollUp()
    }
}

</script>

<style scoped lang=sass>
.container-fluid
    height: 100vh
    background-color: black !important

.row
    display: flex
    height: 100vh
    position: relative

.col-3
    width: 25%
    background-color: #e8e8e890
    transition: transform 0.5s ease-in-out
    transform: translateX(0)
    z-index: 2
    position: relative

.col-3.hidden
    position: absolute
    transform: translateX(-100%)

.col-12
    transition: width 0.5s ease-in-out
    overflow-y: auto
    height: 100vh
    scroll-snap-type: y mandatory
    scrollbar-width: none
    width: 100% 

    &::-webkit-scrollbar
        display: none

.col-9
    transition: width 0.5s ease-in-out
    overflow-y: auto
    height: 100vh
    scroll-snap-type: y mandatory
    scrollbar-width: none
    width: 75% 

    &::-webkit-scrollbar
        display: none

.full-height-section
    padding-top: 50px
    height: 100vh
    scroll-snap-align: start
    color: white

.toggle-btn
    position: absolute
    top: 0px
    right: -45px
    z-index: 3

.show-btn
    position: absolute
    top: 20px
    left: 10px
    z-index: 3
    
/* For smaller screens (phones) */
@media (max-width: 720px) 
    .col-3 
        position: absolute
    
    .col-9 
        width: 100%
    
    .full-height-section 
        font-size: 1.5rem

/* For Iphopne X */
@media (max-width: 1125px) and (max-height: 2436px) 
    .col-3 
        position: absolute
    
    .col-9 
        width: 100%
    
    .full-height-section 
        font-size: 1.5rem

/* For Redmi 7 */
@media (max-width: 720px) and (max-height: 1520px) 
    .col-3 
        position: absolute
    
    .col-9 
        width: 100%
    
    .full-height-section 
        font-size: 1.5rem

</style>