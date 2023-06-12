<? require_once(dirname(__FILE__)."/../_inc/html_header.php"); ?>


			<div class="sub">
				<div class="bg_text">PROJECT</div>
				<div class="bg_text_1">CREATIVE</div>
						<!-- <div style="width:5px; height:2000px; background-color:red"></div> -->
				<div class="project-List-Area">
					<ul class="project-Type">
						<li><a href="#self" class="on">ALL</a></li>
						<li><a href="#self">PC Web</a></li>
						<li><a href="#self">Mobile Web</a></li>
						<li><a href="#self">Responsive Web</a></li>
					</ul>
					
					<div class="project_Box">
						<div class="swiper-container">
							<div class="swiper-wrapper porfolio"></div>
						</div>
						<!-- portfolio ALL slider container -->
						<div class="drag">← DRAG →</div>
					</div><!-- end : class : project_Box -->

					<script type="text/javascript" src="../js/ui.project.js"></script>
				</div><!-- end : class : project-List-Area -->
			</div><!-- end : class : sub -->

			<div id="popup_Layer">
				<div class="view_Area">
					<div class="inner scroll"></div>
					<div class="close"><img src="../images/btn/layer_Close.png" alt="포트폴리오 상세팝업닫기" /></div>
				</div><!-- end : class : view_Area -->
			</div><!-- end : id : popup_Layer -->

			<script type="text/javascript">
			//<![CDATA[
			$(document).ready(function(){
				project.sub();
			});
			//]]>
			</script>
<? require_once(dirname(__FILE__)."/../_inc/html_footer.php"); ?>