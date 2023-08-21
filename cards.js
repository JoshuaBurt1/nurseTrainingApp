var correctCards = 0;
$( init );

function init() {

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile1').html( '' );
  $('#cardSlots1').html( '' );

  //CREATES MATCHING QUESTION PAIRS
  function matchQ() {
    var words = [];
    for ( var i=0; i<numbersF[1].length; i++ ) { 
      //BOTTOM SET
      if(stepQ ==true){ //STATEMENT FOR STEP QUESTIONS
      words.push("Step "+(i+1)); 
      $('<div>' + words[i] + '</div>').data( 'number', i+1).appendTo( '.cardSlots'+numbersF[0]).droppable( { //('number',i+1) required to put steps in correct sequence
        accept: '.cardPile'+numbersF[0]+ ' div',
        hoverClass: 'hovered',
        drop: handleCardDrop
      } );
    }
    else if (stepQ==false){ //STATEMENT FOR CUSTOM INPUT QUESTIONS
      $('<div>' + wordsX[i] + '</div>').data( 'number', i+1 ).appendTo( '.cardSlots'+numbersF[0]).droppable( {
        accept: '.cardPile'+numbersF[0]+ ' div',
        hoverClass: 'hovered',
        drop: handleCardDrop
      } );
    }
      //TOP SET
      $('<div>' + numbersF[1][i].y + '</div>').data( 'number', numbersF[1][i].x ).attr( 'id', 'card1' ).appendTo( '.cardPile'+numbersF[0]).draggable( {
        containment: '#content',
        stack: '.cardPile'+numbersF[0]+ ' div',
        cursor: 'move',
        revert: true
      } );
    }
    numbersF = [];//reset array after function runs
    numbers = []; //reset array for different number of steps
    wordsX =[]; //reset array after function runs
  }

  numbersF = [];//set initial array
  numbers = []; //set initial array

  // Create the pile of shuffled cards - Question set 1
  numbers[0] = {x:1, y:'Mechanism of Action'}; //numbers array position 0 = {x, y}
	numbers[1] = {x:2, y:'Onset/ Peak/ Duration'};
  numbers[2] = {x:3, y:'Side Effects/ Adverse Reactions'};
  numbers[3] = {x:4, y:'Verify Order in MAR w/ Signature'};
	numbers[4] = {x:5, y:'Locate Medication'};
	numbers[5] = {x:6, y:'First Check of 8 Rights'};
	numbers[6] = {x:7, y:'Allergy Assessment'};
	numbers[7] = {x:8, y:'Dosage Calculation'};
  numbers[8] = {x:9, y:'Second Check of 8 Rights'};
	numbers[9] = {x:10, y:'Pour Medication'};
	numbers[10] = {x:11, y:'Third Check of 8 Rights'};
	numbers[11] = {x:12, y:'Recheck Dosage Calculation'};
	numbers[12] = {x:13, y:'Bring Patient Unique # to Verify'};
	numbers[13] = {x:14, y:'ID Patient and check allergy'};
	numbers[14] = {x:15, y:'Health Teaching on Medication - R&R'};
  numbers[15] = {x:16, y:'Administer Medication'};
	numbers[16] = {x:17, y:'Document on MAR (time,date,dose & route)'};
  numbers.sort( function() { return Math.random() - .5 } ); //shuffles numbers array (top set of cards)
  var numbersF= [1,numbers] //settings for matchQ() function
  stepQ = true;
  matchQ();

  numbers[0] = {x:1, y:'Mechanism of Action'};
  numbers[1] = {x:2, y:'Onset/ Peak/ Duration'};
	numbers[2] = {x:3, y:'Side Effects/ Adverse Reactions'};
	numbers[3] = {x:4, y:'Verify Order in MAR w/ Signature'};
	numbers[4] = {x:5, y:'Locate Medication'};
	numbers[5] = {x:6, y:'First Check of 8 Rights'};
  numbers[6] = {x:7, y:'Allergy Assessment'};
	numbers[7] = {x:8, y:'Dosage Calculation'};
	numbers[8] = {x:9, y:'Second Check of 8 Rights'};
	numbers[9] = {x:10, y:'Choose appropriate needle size'};
	numbers[10] = {x:11, y:'Choose appropriate syringe size'};
	numbers[11] = {x:12, y:'No air bubbles'};
	numbers[12] = {x:13, y:'Third Check of 8 Rights'};
  numbers[13] = {x:14, y:'Rechecks Dosage Calculation'};
	numbers[14] = {x:15, y:'Bring Patient Unique # to Verify'};
  numbers[15] = {x:16, y:'ID Patient and check allergy'};
	numbers[16] = {x:17, y:'Health Teaching on Medication - R&R'};
	numbers[17] = {x:18, y:'Cleanse site (Upper arm, abdomen, anterior thigh'};
	numbers[18] = {x:19, y:'Bunch skin or spread skin tight w/ non-dominant'};
	numbers[19] = {x:20, y:'Inject @ 45-90 degree angle'};
	numbers[20] = {x:21, y:'Withdraw needle and wipe using alcohol on site'};
	numbers[21] = {x:22, y:'Dispose of needle in sharps'};
	numbers[22] = {x:23, y:'Document on MAR (time,date,dose & route)'};
  numbers.sort( function() { return Math.random() - .5 } );
  var numbersF= [2,numbers]
  matchQ();

	numbers[0] = {x:1, y:'Mechanism of Action'};
	numbers[1] = {x:2, y:'Onset/ Peak/ Duration'};
	numbers[2] = {x:3, y:'Side Effects/ Adverse Reactions'};
	numbers[3] = {x:4, y:'Verify Order in MAR w/ Signature'};
	numbers[4] = {x:5, y:'Locate Medication'};
	numbers[5] = {x:6, y:'First Check of 8 Rights'};
  numbers[6] = {x:7, y:'Allergy Assessment'};
	numbers[7] = {x:8, y:'Dosage Calculation'};
	numbers[8] = {x:9, y:'Second Check of 8 Rights'};
	numbers[9] = {x:10, y:'Choose appropriate needle size 1.3-2.5cm'};
	numbers[10] = {x:11, y:'Choose appropriate syringe size (3mL max)'};
	numbers[11] = {x:12, y:'No air bubbles'};
	numbers[12] = {x:13, y:'Third Check of 8 Rights'};
  numbers[13] = {x:14, y:'Rechecks Dosage Calculation'};
	numbers[14] = {x:15, y:'Bring Patient Unique # to Verify'};
  numbers[15] = {x:16, y:'ID Patient and check allergy'};
	numbers[16] = {x:17, y:'Health Teaching on Medication - R&R'};
	numbers[17] = {x:18, y:'Cleanse site (Ventrogluteal-preferred, deltoid, vastus laterals)'};
	numbers[18] = {x:19, y:'Z-track'};
	numbers[19] = {x:20, y:'Insert @ 90 degree angle'};
	numbers[20] = {x:21, y:'Aspirate - continue if no blood'};
	numbers[21] = {x:22, y:'Inject @ 1mL/10 sec'};
	numbers[22] = {x:23, y:'Wait 10 sec. Withdraw needle and release Z-track'};
	numbers[23] = {x:24, y:'Apply gentle pressure to site'};
	numbers[24] = {x:25, y:'Dispose of needle in sharps'};
	numbers[25] = {x:26, y:'Document on MAR (time,date,dose & route)'};
  numbers.sort( function() { return Math.random() - .5 } );
  var numbersF= [3,numbers]
  matchQ();
  
	numbers[0] = {x:1, y:'Mechanism of Action'};
	numbers[1] = {x:2, y:'Onset/ Peak/ Duration'};
	numbers[2] = {x:3, y:'Side Effects/ Adverse Reactions'};
	numbers[3] = {x:4, y:'Check IV monograph for compatibility, run time, piggyback size'};
	numbers[4] = {x:5, y:'Verify Order in MAR w/ Signature'};
	numbers[5] = {x:6, y:'Locate Medication'};
	numbers[6] = {x:7, y:'Reconstitute if necessary'};
	numbers[7] = {x:8, y:'Dosage Calculation / Gravity or Pump Rate'};
	numbers[8] = {x:9, y:'Add medication to IV piggyback'};
	numbers[9] = {x:10, y:'First Check of 8 Rights'};
  numbers[10] = {x:11, y:'Allergy Assessment'};
	numbers[11] = {x:12, y:'Second Check of 8 Rights'};
	numbers[12] = {x:13, y:'Prepare Drug Label'};
	numbers[13] = {x:14, y:'Third Check of 8 Rights'};
  numbers[14] = {x:15, y:'Rechecks Dosage Calculation / Gravity or Pump Rate'};
	numbers[15] = {x:16, y:'Bring Patient Unique # to Verify'};
  numbers[16] = {x:17, y:'ID Patient and check allergy'};
	numbers[17] = {x:18, y:'Assess IV site for  phlebitis/ inflitration'};
	numbers[18] = {x:19, y:'Health Teaching on Medication - R&R'};
	numbers[19] = {x:20, y:'Attach piggyback using sterile technique (alcohol swab)'};
	numbers[20] = {x:21, y:'Regulate rates according to calculation'};
	numbers[21] = {x:22, y:'Document on MAR (time,date,dose & route)'};
  numbers.sort( function() { return Math.random() - .5 } );
  var numbersF= [4,numbers]
  matchQ();
  
  numbers[0] = {x:1, y:'Dress'};
	numbers[1] = {x:2, y:'Grooming'};
	numbers[2] = {x:3, y:'Facial Expression'};
	numbers[3] = {x:4, y:'Posture'};
  numbers[4] = {x:5, y:'Gait'};
  numbers[5] = {x:6, y:'Eye Contact'};
  numbers[6] = {x:7, y:'Orientation'};
	numbers[7] = {x:8, y:'Memory'};
	numbers[8] = {x:9, y:'Concentration & Attention'};
	numbers[9] = {x:10, y:'Thinking'};
	numbers[10] = {x:11, y:'Judgement'};
	numbers[11] = {x:12, y:'Mood and Affect'};
	numbers[12] = {x:13, y:'Congruency'};
	numbers[13] = {x:14, y:'Attitude'};
	numbers[14] = {x:15, y:'Speech and Communication'};
	numbers[15] = {x:16, y:'Perception'};
	numbers[16] = {x:17, y:'Thought Content'};
	numbers[17] = {x:18, y:'Thought Process'};
	numbers[18] = {x:19, y:'Interaction'};
	numbers[19] = {x:20, y:'Insight'};
	numbers[20] = {x:21, y:'Medication'};
	numbers[21] = {x:22, y:'History'};
	numbers[22] = {x:23, y:'Suicidal'};
  numbers.sort( function() { return Math.random() - .5 } );
  var numbersF= [5,numbers]
  matchQ();
  
  numbers[0] = {x:1, y:'Sertraline (Zoloft)'}; //medication name to disorder match
	numbers[1] = {x:2, y:'Escitalopram (Cipralex)'};
	numbers[2] = {x:3, y:'Paroxetine (Paxil)'};
	numbers[3] = {x:4, y:'Fluoxetine (Prozac)'};
  numbers[4] = {x:5, y:'Citalopram (Celexa)'};
  numbers[5] = {x:6, y:'Fluvoxamine (Luvox)'};
	numbers[6] = {x:7, y:'Duloxetine (Cymbalta)'};
	numbers[7] = {x:8, y:'Venlafaxine (Effexor)'};
	numbers[8] = {x:9, y:'Desvenlafaxine (Pristiq)'};
	numbers[9] = {x:10, y:'Bupropion (Welbutrin / Zyban)'};
  numbers[10] = {x:11, y:'Amitryptyline (Elavil)'};
	numbers[11] = {x:12, y:'Lorazepam (Ativan)'};
	numbers[12] = {x:13, y:'Clonazepam (Rivotril)'};
	numbers[13] = {x:14, y:'Oxazepam (Serax)'};
	numbers[14] = {x:15, y:'Temazepam (Restoril)'};
  numbers[15] = {x:16, y:'Diazepam (Valium)'};
  numbers[16] = {x:17, y:'Zopiclone (Imovane)'};
	numbers[17] = {x:18, y:'Lithium'};
	numbers.sort( function() { return Math.random() - .5 } );
  var numbersF= [6,numbers]
  stepQ = false; // CUSTOM INPUT QUESTIONS
  var wordsX = ['Antidepressant - SSRI, Major Depression, OCD, PTSD, social anxiety disorder', 'Antidepressant -SSRI, Major Depression, general anxiety disorder', ' Antidepressant - SSRI, Major Depression, OCD, PTSD, social anxiety, general anxiety, panic, premenstrual', ' Antidepressant - SSRI, major depressive disorder, OCD, bulemia nervosa,', 'Antidepressant - SSRI, major depressive disorder', 'Antidepressant - SSRI, major depressive disorder, OCD, PTSD, anxiety d., panic d.', 'Antidepressant - SNRI, MDD, neuropathic pain ass. w/ diabetic neuropathy, general anxiety disorder, fibromyalgia, chronic low back pain, osteoarthritis pain', 'Antidepressant - SNRI, MDD, depression at end-of-life, general anxiety d., panic d., soc. anx. d. (XR)', 'Antidepressant - SNRI, MDD', 'Antidepressant - NDRI, Depression, smoking cessation, seasonal affective disorder', 'Antidepressant - Tricyclic, MDD', 'Anxiolytic', 'Anxiolytic','Anxiolytic','Anxiolytic','Anxiolytic','Anxiolytic','Antimanic'];
  matchQ();

	numbers[0] = {x:1, y:'Verify Last Disinfection'}; //hospital hemodialysis 
	numbers[1] = {x:2, y:'Verify and Connect Concentrates'};
	numbers[2] = {x:3, y:'Start Treatment'};
	numbers[3] = {x:4, y:'Prepare to Install Bloodlines'};
	numbers[4] = {x:5, y:'Install Arterial Bloodline'};
	numbers[5] = {x:6, y:'Attach Arterial Bloodline'};
  numbers[6] = {x:7, y:'Install Heparin Syringe'};
	numbers[7] = {x:8, y:'Install Venous Bloodline'};
	numbers[8] = {x:9, y:'Attach Venous Bloodline'};
	numbers[9] = {x:10, y:'Clamp Injection Ports'};
	numbers[10] = {x:11, y:'Prepare for Rinse'};
	numbers[11] = {x:12, y:'Spike Saline Bag'};
	numbers[12] = {x:13, y:'Start Rinse'};
  numbers[13] = {x:14, y:'Rinse'};
	numbers[14] = {x:15, y:'Start Circulation'};
  numbers[15] = {x:16, y:'Fill Dialyzer'};
	numbers[16] = {x:17, y:'Validate and Enter Treatment Parameters'};
  numbers.sort( function() { return Math.random() - .5 } );
  var numbersF= [7,numbers]
  stepQ = true;
  matchQ();

  numbers[0] = {x:1, y:'Obtain vital signs, weight, diet'}; //home peritoneal dialysis improve later
  numbers[1] = {x:2, y:'Weight gain = inc. dextrose conc. to remove excess fluid'};
  numbers[2] = {x:2, y:'Obtain appropriate solution (dialysate)'};
  numbers[3] = {x:3, y:'SEAL: strength, expiration date, amount, leaks'};
  numbers[4] = {x:3, y:'Remove previous tubing from machine'};
  numbers[5] = {x:4, y:'Place solution on heating portion of machine'};
  numbers[6] = {x:5, y:'Wash hands'};
  numbers[7] = {x:6, y:'Open new tubing, lay on sterile area'};
  numbers[8] = {x:7, y:'Insert new tubing into manifold'};
  numbers[9] = {x:8, y:'Spike solution bag'};
  numbers[10] = {x:9, y:'Turn on machine, get bucket, prime tubing'};
  numbers[11]= {x:10, y:'Place tubing in sterile area for patient to connect.'};
  numbers.sort( function() { return Math.random() - .5 } );
  var numbersF= [8,numbers]
  stepQ = true;
  matchQ();

  numbers[0] = {x:1, y:'Find an environment with appropriate lighting'}; //starting an IV
  numbers[1] = {x:2, y:'Place patient arm on a stable surface'};
  numbers[2] = {x:3, y:'Obtain an IV start kit'};
  numbers[3] = {x:4, y:'Look for common sites: AC, forearm, hand'};
  numbers[4] = {x:5, y:'Look for raised, bluish color beneath skin'};
  numbers[5] = {x:6, y:'Feel area for slight bounce on palpitation'};
  numbers[6] = {x:7, y:"Prepare IV: A. apply (or don't) tourniquet proximal to IV site"};
  numbers[7] = {x:8, y:'Prepare IV: B. attach valve to tubing, prime, & leave NS syringe attached'};
  numbers[8] = {x:9, y:'Prepare IV: C. Open tegaderm, leave sticky area OTA'};
  numbers[9] = {x:10, y:'Prepare IV: D. Clean proposed IV site with alcohol or chlorhexidine'};
  numbers[10] = {x:11, y:'Prepare IV: E. Select appropriate needle for vein size (hand yellow, AC blue)'};
  numbers[11] = {x:12, y:'Prepare IV: F. Insert needle at low angle right before vein/on top'};
  numbers[12] = {x:13, y:'Prepare IV: G. Observe blood return, attach primed tubing an flush lightly'};
  numbers[13] = {x:14, y:'Prepare IV: H. Observe for infiltration (swelling)'};
  numbers[14] = {x:15, y:'Prepare IV: I. If blood return (+) & infiltration (-), secure with tegaderm'};
  numbers[15] = {x:16, y:'Prepare IV: J. Attach extension tubing for patient to self admin. IV medication'};
  numbers[16] = {x:17, y:'Prepare IV: K. Secure IV and tubing with gauze and tape'};
  numbers[17] = {x:18, y:'Change site if infiltration visible or medication vein damage visible'};
  numbers.sort( function() { return Math.random() - .5 } );
  var numbersF= [9,numbers]
  stepQ = true;
  matchQ();

  numbers[0] = {x:1, y:'Find an environment with appropriate lighting'}; //subQ port initiation (butterfly)
  numbers[1] = {x:2, y:'Choose a subQ site: posterior arm, back, abdomen, thigh'};
  numbers[2] = {x:3, y:'Obtain Saf-T-Intima or equivalent (butterfly)'};
  numbers[3] = {x:4, y:'Cleanse site with alcohol'};
  numbers[4] = {x:5, y:'Insert at low angle into fatty tissue (subQ)'};
  numbers[5] = {x:6, y:'Set up pump or adjust flow rate'};
  numbers[6] = {x:7, y:'Attach medication or hydration'};
  numbers.sort( function() { return Math.random() - .5 } );
  var numbersF= [10,numbers]
  stepQ = true;
  matchQ();


}

function handleCardDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var cardNumber = ui.draggable.data( 'number' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if ( slotNumber == cardNumber ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  } 
  
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( correctCards == 17 ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '100px',
      opacity: 1
    } );
  }

}
