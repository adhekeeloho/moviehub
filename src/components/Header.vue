<script setup>

</script>

<template>

<div class="relative min-h-screen md:flex" data-dev-hint="container">
    
    <input type="checkbox" id="menu-open" class="hidden" />
    

    <header class="bg-[linear-gradient(147deg, #000000 0%, #04619f 74%)] text-gray-100 flex justify-between md:hidden" data-dev-hint="mobile menu bar">
         <a href="#" class="block p-4 text-white font-bold whitespace-nowrap truncate">
           cool
        </a>
        <div class="flex-1 flex justify-center pt-2  md:ml-3 lg:justify-end  lg:block">
            <div class="max-w-lg w-full ml-12 lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="">
                
                <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-[#CCCCCC] text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="search">
              </div>
            </div>  
          </div>

        <label for="menu-open" id="mobile-menu-button" class="m-2 p-2 focus:outline-none hover:text-white hover:bg-gray-700 rounded-md">
            <svg id="menu-open-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg id="menu-close-icon" class="h-6 w-6 transition duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </label>
    </header>

    <aside id="sidebar" class="bg-gradient-to-l from-sky-900 to-slate-900 text-gray-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
        <div class="flex flex-col space-y-6" data-dev-hint="optional div for having an extra footer navigation">
            <a href="#" class="text-white flex items-center space-x-2 px-4" title="Your App is cool">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span class="text-2xl font-extrabold whitespace-nowrap truncate">Hello</span>
            </a>

            <nav data-dev-hint="main navigation">
                <a href="#" class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <span>Home</span>
                </a>
                 <a href="#" class="flex items-center space-x-2 py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                    <span>Movie</span>
                </a>
               
            </nav>
        </div>

        <nav data-dev-hint="second-main-navigation or footer navigation">
            <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                settings
            </a>
            <a href="#" class="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                faqs
            </a>
            
        </nav>
    </aside>

    

    <main id="content" class="flex-1 p-6 lg:px-8 bg-gradient-to-l from-sky-900 to-slate-900  ">
        <!-- <section class="bg-[linear-gradient(147deg, #000000 0%, #04619f 74%)] p-6 sm:hidden  ">
        <div class="flex-1 flex justify-center   md:ml-3 lg:justify-end  lg:block">
            <div class="max-w-lg w-full ml-12 lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="">
                
                <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-[#CCCCCC] text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm" placeholder="Search" type="search">
              </div>
            </div>  
          </div>
          </section> -->
        <div class="max-w-7xl mx-auto">
            <!-- Replace with your content -->
            
            <div class="px-4 py-6 sm:px-0">
                <div class=""><slot name="maincontent"> </slot></div>
            </div>
            <!-- /End replace -->
        </div>
    </main>
</div>
</template>

<style scoped>
#sidebar {
    --tw-translate-x: -100%;
}
#menu-close-icon {
    display: none;
}

#menu-open:checked ~ #sidebar {
    --tw-translate-x: 0;
}
#menu-open:checked ~ * #mobile-menu-button {
    background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
}
#menu-open:checked ~ * #menu-open-icon {
    display: none;
}
#menu-open:checked ~ * #menu-close-icon {
    display: block;
}

@media (min-width: 768px) {
    #sidebar {
        --tw-translate-x: 0;
    }
}

</style>