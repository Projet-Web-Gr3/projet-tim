   <!-- Le footer -->
   <footer>
       <div class="conteneur-map">

           <div>
               <h3>Où sommes-nous?</h3>
               <iframe class="map"
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11175.84848210141!2d-73.56381725300632!3d45.55108753913299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bf575ab9357%3A0xa64ecd7388cc64f0!2s3800%20R.%20Sherbrooke%20E%2C%20Montr%C3%A9al%2C%20QC%20H1X%202A2!5e0!3m2!1sfr!2sca!4v1727880483899!5m2!1sfr!2sca"
                   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>

           <div class="conteneur-texte">
               <p>3800 R.Sherbrooke Est,</p>
               <p>Montréal, QC H1X 2A2</p>
               <p>(514)-254-7131</p>
           </div>
       </div>

       <div class="liens">
           <div class="barre-footer clr-agencement-primaire">
               <div class="search-form">
                   <?php get_search_form(); ?>
               </div>
           </div>

                <div class="logo">
                    <img src="https://placehold.co/600x400" alt="">
                    <img src="https://placehold.co/600x400" alt="">
                    <img src="https://placehold.co/600x400" alt="">
                    <img src="https://placehold.co/600x400" alt="">
                </div>
            </div>
        </footer>
    </div>
    <!-- JS -->
    <!-- <script src="/4w4_joules/wp-content/themes/projet-tim/js/carousel.js"></script>
    <script src="/4w4_joules/wp-content/themes/projet-tim/js/index.js"></script>
    <script src="/4w4_joules/wp-content/themes/projet-tim/js/coursDropDown.js"></script>-->
    <script type="module" src="<?php echo get_template_directory_uri() .'/js/model3d.js' ?>"></script> 
<?php wp_footer(); ?>
</body>
</html>