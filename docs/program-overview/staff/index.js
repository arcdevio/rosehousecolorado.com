var dStaff = window.Global.staff;
var eStaff = document.querySelector('.staff');
var html = '';
var i, l, profile;

for (i = 0, l = dStaff.length; i < l; i++) {
  profile = dStaff[i];
  html += '                                                                        \
		<div class="profile">                                                        \
			<img src="' + profile.image + '" alt="Profile Picture ' + profile.name + '"/>    \
			<div class="profile-name">                                               \
				<div>' + profile.name + '</div>                                            \
				<div>' + profile.title + '</div>                                             \
			</div>                                                                   \
			<div class="profile-toggle">Read More</div>                              \
			<div class="profile-description">                                        \
				<div class="profile-wrap">                                           \
					<img src="' + profile.image + '" alt="Profile Picture ' + profile.name + '"/>    \
					<h4>' + profile.name + '</h4>                                        \
					<p><strong>' + profile.title + '</strong></p>                        \
					<p>' + profile.descriptions.join('</p><p>') + '</p>                  \
				</div>                                                               \
			</div>                                                                   \
		</div>                                                                       \
	';
}

eStaff.innerHTML = html;
var profileToggles = document.querySelectorAll('.profile-toggle');
var profileDescriptions = document.querySelectorAll('.profile-description');

for (i = 0, l = profileToggles.length; i < l; i++) {
  var profileToggle = profileToggles[i];
  var profileDescription = profileDescriptions[i];
  var profileWrap = profileDescription.querySelector('.profile-wrap');
  var html = document.querySelector('html');
  var closeButton = document.createElement('button');
  closeButton.classList.add('profile-close');
  closeButton.classList.add('button');
  closeButton.innerText = 'Close';
  profileWrap.appendChild(closeButton);
  profileToggle.addEventListener('click', function () {
    this.parentElement.querySelector('.profile-description').classList.toggle('active');
    html.style = 'overflow-y: hidden';
  });
  closeButton.addEventListener('click', function () {
    this.parentElement.parentElement.classList.toggle('active');
    html.style = 'overflow-y: inherit';
  });
} // html += '                                                                        \
// 	<div class="profile">                                                        \
// 		<img src="'+profile.image+'" alt="Profile Picture '+profile.name+'"/>    \
// 		<div class="profile-name">                                               \
// 			<div>'+profile.name+'</div>                                            \
// 			<div>'+profile.title+'</div>                                             \
// 		</div>                                                                   \
// 		<div class="profile-toggle">Read More</div>                              \
// 		<div class="profile-description">                                        \
// 			<div class="profile-wrap">                                           \
// 				<div class="profile-circle">									 \
// 					<img src="'+profile.image+'" alt="Profile Picture '+profile.name+'"/>    \
// 				</div>                                                           \
// 				<h4>'+profile.name+'</h4>                                        \
// 				<p><strong>'+profile.title+'</strong></p>                        \
// 				<p>'+profile.descriptions.join('</p><p>')+'</p>                  \
// 			</div>                                                               \
// 		</div>                                                                   \
// 	</div>                                                                       \
// ';