<?php get_header() ?>
<div id="main-content">
        <div id="container3D"></div>
    <!-- Contenu du site -->
        <main>   
            <section class="accueil_effacer">
                <h1>BIENVENUE AU</h1>
                <img src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/LogoTIMHiRes.png" alt="" class="logoGrand">
                <h1>TECHNIQUE D'INTÉGRATION MULTIMÉDIA</h1>
            </section>
            <!-- Texte d'intro TIM -->
            <section class="intro effacer">
                <h2>TIM... C'est quoi?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsa beatae cupiditate eaque a
                    impedit et dolore, quod libero non corrupti officia magni adipisci inventore ea distinctio iusto
                    nemo necessitatibus.
                    Exercitationem cum, iste officiis voluptatibus repudiandae vitae repellendus ex soluta accusantium
                    cumque quod minima doloribus. Deserunt molestiae dolorum nesciunt repudiandae quae quod in facere
                    quos, optio voluptatum rerum odit culpa?</p>
            </section>

           <!-- Apprentissages -->
            <section class="apprentissages effacer">
                <div class="jeuApprentissage">
                    <h2>JEU</h2>
                    <Div>
                        <img class="img1Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Unity.png" alt="Unity">
                        <img class="img2Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/CSharp.png" alt="CSharp">
                        <img class="img3Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Meta.png" alt="meta">
                        <img class="img4Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/VS.png" alt="VS">
                    </Div>
                </div>
                <div class="audiovisuelApprentissage">
                    <h2>AUDIOVISUEL</h2>
                    <Div>
                        <img class="img1Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Ae.png" alt="Ae">
                        <img class="img2Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Maya.png" alt="Maya">
                        <img class="img3Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Pt.png" alt="Pt">
                        <img class="img4Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/TouchDesigner.png" alt="TouchDesigner">
                    </Div>
                </div>
                <div class="designApprentissage">
                    <h2>DESIGN</h2>
                    <Div>
                        <img class="img1Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Ps.png" alt="Ps">
                        <img class="img2Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Ai.png" alt="Ai">
                        <img class="img3Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Figma.png" alt="Figma">
                        <img class="img4Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Xd.png" alt="XD">
                    </Div>
                </div>
                <div class="webApprentissage">
                    <h2>WEB</h2>
                    <div>
                        <img class="img1Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/HTML.png" alt="HTML">
                        <img class="img2Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/CSS.png" alt="CSS">
                        <img class="img3Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Javascript.png" alt="Javascript">
                        <img class="img4Effet" src="https://gftnth00.mywhc.ca/tim17/wp-content/uploads/2024/11/Github.png" alt="Github">
                    </div>
                </div>

            </section>

            <!-- Carousel -->
            <section class="carousel">
				<?php
				include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php');
				echo do_shortcode('[carousel]');
				?>
			</section>
        </main>
        <?php get_footer(); ?>