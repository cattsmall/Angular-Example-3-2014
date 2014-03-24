// Define your controller and the objects you need to reference.
myAngularApp.controller('appInfoController', function ($rootScope, $scope) {
  /* Define a variable (an object variable in the case below). All variables must be within angular's $scope to be referenced in a template.
     To create a global variable, use $rootScope. */
  $scope.myApp = {
    name: 'Network A',
    description: 'Description goes here'
  };
  
	$scope.video = 
    {
      id:1,
      name: 'Bob Burnquist built a floating miniramp in the middle of Lake Tahoe',
      description: "###*Is this video FTW? Rank it above.* BMX rider Andy Buckworth didn't make it all the way to [Nitro Circus][1] by being careful. Buckworth has pushed things on a bike since he was just a little kid in Australia. In this Rare Air interview on *[Crooked World BMX][2]*, Buckworth talks about his first jump he ever built, which was made from a sewer grate and two bricks and sat at the end of a very huge hill. ###*What do you think of this episode of* Crooked World BMX*? Tell us in the Comments.* [1]: http://www.networka.com/tags/1498/nitro-circus [2]: http://www.networka.com/shows/10/crooked-world-bmx",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "cuando-debe-ser-desconectado-un-paciente-con-muerte-cerebral-primer-impacto",
      
      provider: "YouTube",
      provider_uid: "R0KFSbcy-oc",
      
      comments_count: 1,
      views_count: 2345,
      
      created_at: "2014-03-17T15:42:14.230Z",
      updated_at: "2014-03-17T15:47:46.309Z",
      uploaded_at: "2014-01-15T06:14:20.000Z",
      published_at: "2014-03-17T15:47:46.305Z",
      status: "unpublished",
    };
     
 	$scope.videos = [
    {
      id:1,
      name: 'Bob Burnquist built a floating miniramp in the middle of Lake Tahoe',
      description: "###*Is this video FTW? Rank it above.* BMX rider Andy Buckworth didn't make it all the way to [Nitro Circus][1] by being careful. Buckworth has pushed things on a bike since he was just a little kid in Australia. In this Rare Air interview on *[Crooked World BMX][2]*, Buckworth talks about his first jump he ever built, which was made from a sewer grate and two bricks and sat at the end of a very huge hill. ###*What do you think of this episode of* Crooked World BMX*? Tell us in the Comments.* [1]: http://www.networka.com/tags/1498/nitro-circus [2]: http://www.networka.com/shows/10/crooked-world-bmx",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "cuando-debe-ser-desconectado-un-paciente-con-muerte-cerebral-primer-impacto",
    
      provider: "YouTube",
      provider_uid: "R0KFSbcy-oc",
    
      comments_count: 1,
      views_count: 2345,
    
      created_at: "2014-03-17T15:42:14.230Z",
      updated_at: "2014-03-17T15:47:46.309Z",
      uploaded_at: "2014-01-15T06:14:20.000Z",
      published_at: "2014-03-17T15:47:46.305Z",
      status: "published",
    },
    {
      id:2,
      name: 'Watch a snowboarder get towed by an electric jet engine at 50 miles per hour',
      description: "BMX riders are resourceful people. And they also like to party. For St. Patrick's Day, *[Crooked World BMX][1]* invited pro riders Albert Mercado, Hoang Tran, Dirt Ron, Kyle Hart, Demarcus Paul, and Tom Perry to enjoy a couple beers and have a miniramp jam. Rather than just popping bottles the traditional way, these BMX riders discovered that their bikes also make outstanding bottle openers. This is the best St. Patrick's Day BMX video you will ever see. Happy St. Paddy's Day! *What do you think of this episode of Crooked World BMX? Tell us in the Comments.* [1]: http://www.networka.com/shows/10/crooked-world-bmx",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "bmx-riders-use-moving-bikes-to-open-beer-bottles-on-crooked-world",
    
      provider: "YouTube",
      provider_uid: "XkoNrHQ02qQ",
    
      comments_count: 13,
      views_count: 41504,
    
      created_at: "2014-03-12T19:55:43.989Z",
      updated_at: "2014-03-19T15:15:46.401Z",
      uploaded_at: "2014-01-15T06:14:20.000Z",
      published_at: "2014-03-17T15:47:46.305Z",
      status: "published",
    },
    {
      id:3,
      name: "Dose: Jefferson Pang celebrates 20 years of skateboarding with an awesome Shut deck",
      description: "###*Do you think this video is FTW? Rank it above.* ↵↵[New York City's][1] first professional street skater [Jefferson Pang][2] has seen [just about everything][3] in his 20-plus years in skateboarding. On the new episode of *[Dose][4]* Pang drops some OG knowledge and gives a history lesson on the three NYC skaters that everyone should know about: [Beasley][5], [Jeremy Henderson][6], and [Harry Jumanji][7]. Pang also shows off his newly released pro model deck with [Shut Skateboards][8] to celebrate his skate legacy.↵↵To purchase Jefferson Pang's new Shut skateboard deck, [go to ShutNYC.com.][9] ↵↵###*What do you think of Jefferson Pang's new Shut skateboard? Tell us in the Comments.* ↵↵  [1]: http://www.networka.com/tags/347/new-york-city↵  [2]: http://www.networka.com/tags/1305/jefferson-pang↵  [3]: http://www.shutnyc.com/page/news/id/619/t/shut-jeff-pang-first-things-first/↵  [4]: http://www.networka.com/shows/9/dose↵  [5]: http://www.youtube.com/watch?v=G0r1qpt_V7U↵  [6]: http://www.youtube.com/watch?v=mIqqJQoHypo↵  [7]: http://www.youtube.com/watch?v=CXiSWs72qf4↵  [8]: http://www.networka.com/tags/4645/shut-skateboards↵  [9]: http://www.shutnyc.com/page/shop/id/621/t/shut-pang-deck/",
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "jefferson-pang-talks-about-his-new-shut-skateboards-deck-on-dose",
    
      provider: "YouTube",
      provider_uid: "Vs1M-M8zDI0",
    
      comments_count: 1,
      views_count: 2345,
    
      created_at: "2014-03-18T18:37:14.054Z",
      updated_at: "2014-03-17T15:47:46.309Z",
      uploaded_at: "2014-01-15T06:14:20.000Z",
      published_at: "2014-03-18T20:43:04.913Z",
      status: "published",
    },
    {
      id:4,
      name: 'Bob Burnquist built a floating miniramp in the middle of Lake Tahoe',
      description: 'Más noticias: http://bit.ly/10W33sR Dos nuevos casos avivaron la polémica y el Dr. Juan Rivera aclaró cuándo es posible desconectarlos y cuándo no. SUSCRIBETE!: http://www.youtube.com/channel/UC9SUMV0oYm0XK9H-c3GmKaQ Primer Impacto: Encuentra las noticias y reportajes más impactantes que ocurren en Estados Unidos y el mundo, presentadas por Bárbara Bermudo y Pamela Silva-Conde. Síguenos en Twitter: http://bit.ly/ZhUzJU Síguenos en Facebook: http://on.fb.me/16NsW0D Más noticias en: http://noticias.univision.com ¿Cuándo debe ser desconectado un paciente con muerte cerebral? - Primer Impacto ',
      short_description: null,
      meta_description: null,
      meta_title: null,
      slug: "cuando-debe-ser-desconectado-un-paciente-con-muerte-cerebral-primer-impacto",
    
      provider: "YouTube",
      provider_uid: "R0KFSbcy-oc",
    
      comments_count: 1,
      views_count: 2345,
    
      created_at: "2014-03-17T15:42:14.230Z",
      updated_at: "2014-03-17T15:47:46.309Z",
      uploaded_at: "2014-01-15T06:14:20.000Z",
      published_at: "2014-03-17T15:47:46.305Z",
      status: "published",
    }
  ];
  
  $scope.reactions = [
    {
      id:1,
      name: "lol",
      count: 0,
      selected: false
    },
    {
      id:2,
      name: "wtf",
      count: 0,
      selected: false
    },
    {
      id:3,
      name: "omg",
      count: 0,
      selected: false
    },
  ];
  
  $scope.toggleReactionState = function (reaction) {
    if (reaction.selected == false) {
      reaction.selected = true;
    }
    else {
      reaction.selected = false;
    }
  };
});