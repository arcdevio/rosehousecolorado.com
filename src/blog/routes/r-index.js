
export default {
	path: './',
	title: 'Blog | The Rose House Colorado',
	component: {
		name: 'r-index',
		model: {
			articles: [
				{
					title: 'Are women increasingly at risk of addiction?',
					body: 'At The Rose House in Boulder, Colorado, Dr. Marcie Chambers has been a longtime innovator in gender specific treatment for women. She recently came across an article in The Washington Post, <a href="https://www.washingtonpost.com/national/health-science/are-women-increasingly-at-risk-of-addiction/2017/02/24/dfa5b98c-d2ba-11e6-9cb0-54ab630851e8_story.html?tid=ss_mail&utm_term=.d4cf2ac083a7" target="_blank">Are women increasingly at risk of addiction?</a> There is ample research that suggests that women are effected by alcohol and addiction in very specific ways. In addition, the changing culture has influenced how women use alcohol socially and to handle stress.',
					image: 'https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/02/23/Health-Environment-Science/Images/womenaddiction_Perre_Mornet.jpg?uuid=kKl33vnxEea_AdR_jPm2Qw',
					thumbnail: 'https://img.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/02/23/Health-Environment-Science/Images/womenaddiction_Perre_Mornet.jpg?uuid=kKl33vnxEea_AdR_jPm2Qw',
					href: 'https://www.washingtonpost.com/national/health-science/are-women-increasingly-at-risk-of-addiction/2017/02/24/dfa5b98c-d2ba-11e6-9cb0-54ab630851e8_story.html?tid=ss_mail&utm_term=.d4cf2ac083a7'
				}
			]
		},
		template: `
		<div class="small-12 columns">
			<div o-each-article="articles" class="articleles">
				<div>
					<h3 o-text="article.title"></h3>
					<img o-src="article.thumbnail" class="thumbnail blog-thumb">
					<div o-html="article.body"></div>
					<a o-href="article.href" class="button green" target="_blank">Read More</a>
				</div>
			</div>
		</div>
		`
	}
}
