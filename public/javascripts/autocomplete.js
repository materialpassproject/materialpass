$(document).ready(function(){
    var availableTags = [
     "Aditya Engineering College",
     "Aditya College of Engineering and technology",
     "Aditya College Engineering",
     "Aditya polytechnic College",
     "Aditya pharmacy College",
     "Aditya Business School",
     "Aditya C B S E College",
     "Aditya BPED College",
     "Bus Garrage",
     "Aditya P.G.Block",
     "North Canteen-Boys Hostel", 
     "South Canteen-Boys Hostel",
     "North Canteen-Girls Hostel",
     "South Canteen-Girls Hostel",
     "Agriculture Department",
    ];
    $("#source").autocomplete({
    source: availableTags
    });
    $("#destination").autocomplete({
    source: availableTags
    });
    var availableTags1 = [
"CHAIRMAN",
"V.C SIR",
"M.BHASKARA REDDY",
"PRINCIPAL",
"VICE PRINCIPAL",
"HOD OF MECHANICAL",
"HOD OF ECE",
"HOD OF EEE",
"HOD OF CIVIL",
"HOD OF CSE",
"HOD OF PT",
"HOD OF AGRICULTURE",
"HOD OF BSE",
"P.KRISHNA MURTHY",
"A.O – T.PAPAYYA",
"A.O – Y.V.NAGESWARARAO",
"A.O – A.SUBHAKAR REDDY",
"A.O – D.SIVAKRISHNA",
"A.O – T.VENKATESH",
"A.O – T.VENUGOPAL",
"A.O – T.RAMACHANDRAN",
"B.SURYA RAO",
"J.RAMAKRISHNA",
"Y.PUTRA KUMAR",
"B.L.SUDHEER",
"SIDDESWARA RAO",
"SURIBABU",
"ANNAVARAM",
"P.VENKATARAO",
"NAGARAJU",
"P.MALLESWARA RAO",
"REWARD SON",
"SWAMY",
"VENKATESWARA RAO",
"CHIEF WARDEN",
"P.HARI KRISHNA",
"K.SRINIVAS",
"V.V.VENKATARAO",
"P.BRAHMANANDARAO",
"M.SURYA PRAKASHA RAO",
"M RAMA KRISHNA",
"V.YESURATNAM",
"S.TIRUPATHI RAO",
"G VENKATA RAMANA",
"A.VEERABHADRA RAO",
"P SRINIVASU",
"J.CHITTIBABU",
"K.JOSEPH",
"P SURYA RAO",
"K PRASADA RAO",
"A S N MURTHY",
"U PRASAD BABU",
"R.VENKATESWARARAO",
"B S K MADHAVARAO",
"K U M RAO",
"G V V RAMANA",
"P.SATHIBABU",
"G.SURYANARAYANA",
"T.NAGESWARARAO",
"G CHELLA RAO",
"KVV SATYANARAYANA",
"K.VEERRAJU",
"M.HARANATH BABA",
"P.GANGADHAR"
];
$(document).ready(
function () {
$("#splperson").autocomplete({
source: availableTags1,
autoFocus: true,
});
}
); 
  });