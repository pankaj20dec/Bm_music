
		</div><!-- .site-content -->
<div class="scroll-top"><a href="javascript:void(0);">top</a></div>
		<footer id="footer">
			<div class="social-icons">
				<ul>
					<li><a href="#" class="facebook">facebook</a></li>
					<li><a href="#" class="twitter">twitter</a></li>
					<li><a href="#" class="instagram">instagram</a></li>
					<li><a href="#" class="youtube">youtube</a></li>
				</ul>	
			</div>
			<div class="mobile-social-icons">
				<ul>
					<li><a href="#" class="facebook">facebook</a></li>
					<li><a href="#" class="twitter">twitter</a></li>
					<li><a href="#" class="instagram">instagram</a></li>
					<li><a href="#" class="youtube">youtube</a></li>
				</ul>	
			</div>
			<div class="copyright">
				<p>© 2016 Brightman Music LLC. All rights reserved.</p>
			</div>
		</footer>
		<div class="contact-popup">
			<a href="javascript:void(0);" class="pop-close">Close</a>
			<div class="contact-form clearfix">
				<?php echo do_shortcode('[contact-form-7 id="32" title="Contact form 1"]');?>
			</div>
		</div>
<?php wp_footer(); ?>
<script>
	(function($) {
	$(document).ajaxComplete(function() {
	setTimeout(
	function()
	{
	$('.wpcf7-mail-sent-ok').slideUp('slow');
	}, 2000);
	});
	})(jQuery);
</script>
</body>
</html>
