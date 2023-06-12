<? require_once(dirname(__FILE__)."/../_inc/html_header.php"); ?>


			<div class="sub">
				<div class="bg_text_2">UX/UI</div>
				<div class="bg_text_3">PASSION</div>
				<div class="contact">
					<!-- <div class="c_bg"><img src="../images/contents/contact_Bg.png" alt="Contact" /></div> -->
					<div class="info">
						<div class="contact_Area">
							<div class="in">
								<p class="ct_Title">Contacts</p>
								<div class="contact_Box">
									<div>
										<p class="p_14Type none">
											제작문의 및 견적을 의뢰하시면 신속하게 답변드립니다.
											<span>아래 연락처나 이메일로 문의주시면 바로 상담받으실 수 있습니다.</span>
										</p>
										<ul class="ul_infoType">
											<li><span>TEL</span>010.8726.8725</li>
											<li><span>E-mail</span>luck5252@nate.com</li>
										</ul>
									</div>
									<div class="contact_Input">
										<div class="input-Box"><input type="text" id="name" title="이름을 입력하세요" /><label for="name">Name *</label></div>
										<div class="input-Box"><input type="text" id="email" title="이메일을 입력하세요" /><label for="email">E-mail *</label></div>
										<div class="input-Box"><input type="text" id="phone" title="연락처를 입력하세요" /><label for="phone">Phone *</label></div>
										<div class="input-Box"><textarea name="" id="message" cols="30" rows="10" title="메시지를 입력하세요"></textarea><label for="message" class="a">Message *</label></div>
										<div class="send"><button>SEND</button></div>
									</div>
								</div>
							</div><!-- end : class : in -->
						</div><!-- end : class : contact_Area -->

					</div><!-- end : class : info -->
				</div><!-- end : class : contact -->
			</div><!-- end : class : sub -->

			<script type="text/javascript">
			//<![CDATA[
			$(document).ready(function(){
				project.sub();
			});
			//]]>
			</script>

<? require_once(dirname(__FILE__)."/../_inc/html_footer.php"); ?>