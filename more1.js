const byName = n => dinos.find(d => d.name === n);

Object.assign(byName("Velociraptor"), {image:"velociraptor-full.png", article:[
{h:"Meet the swift thief", p:["Velociraptor was named in 1924 by Henry Fairfield Osborn. The name means “swift thief”. Its fossils were first found in 1923 in the Gobi Desert of Mongolia. It lived about 75 to 71 million years ago, in a dry, sandy land of dunes and seasonal streams."]},
{h:"Not as big as the movies", p:["The real Velociraptor was about 2 m (6.5 ft) long including its tail and weighed roughly 15 kg, about the size of a large turkey. The Velociraptors in the Jurassic Park movies are much bigger than the real animal."]},
{h:"Feathers", p:["Velociraptor had feathers. A forearm bone found in Mongolia has a row of small bumps called quill knobs, which are the places where large feathers attach to the bone in living birds. It could not fly, and scientists think the feathers were used for display, warmth, or both."]},
{h:"The sickle claw", p:["On the second toe of each foot was a curved claw up to about 6.5 cm (2.5 in) long. Velociraptor held it raised off the ground while it walked. Scientists think it was used to grip and pin down prey, and they still debate exactly how."], img:"velociraptor-claw.png", cap:"The raised sickle claw of Velociraptor"},
{h:"A small hunter", p:["Velociraptor was a meat eater with a long, low snout and sharp, curved teeth with tiny serrations. It belonged to a group of dinosaurs that were closely related to the ancestors of birds."]},
{h:"The Fighting Dinosaurs", p:["In 1971, a Polish and Mongolian expedition found a fossil of a Velociraptor locked in battle with a Protoceratops, an animal bigger and heavier than itself. The Velociraptor’s sickle claw is on the throat of the Protoceratops, and the Protoceratops has the Velociraptor’s arm in its jaws. Both animals were probably buried suddenly while they fought."], img:"velociraptor-fight.png", cap:"Velociraptor and Protoceratops locked in a fight"}
]});

Object.assign(byName("Triceratops"), {image:"triceratops-full.png", article:[
{h:"Meet the three-horned face", p:["Triceratops was named in 1889 by the fossil hunter Othniel Charles Marsh. The name means “three-horned face”. It lived in western North America about 68 to 66 million years ago, in the same place and time as T. rex, and it was one of the last non-bird dinosaurs to exist."]},
{h:"Size", p:["Triceratops was about 8 to 9 m (26 to 30 ft) long and weighed roughly 6 to 10 tonnes, as heavy as a big elephant or heavier."]},
{h:"Horns and frill", p:["It had two long horns above its eyes, up to about 1 m long, and a shorter horn on its nose. Behind them was a wide frill made of solid bone. Its skull could grow up to about 2.5 m long, one of the largest skulls of any land animal known."], img:"triceratops-skull.png", cap:"The huge skull and frill of Triceratops"},
{h:"What were the horns for?", p:["Scientists think the horns and frill were used for defense and for display, such as to impress a mate or a rival. Some Triceratops skulls have healed injuries that look like they came from fights with other Triceratops. Some bones also carry tyrannosaur bite marks, and in some cases the wounds had healed, which suggests Triceratops fought back and survived."], img:"triceratops-vs-trex.png", cap:"Triceratops facing a T. rex"},
{h:"What it ate", p:["Triceratops was a plant eater. It had a sharp, beak-like mouth for snipping plants, and hundreds of teeth packed into rows called dental batteries that sheared tough plants as it chewed. It probably ate low plants such as ferns, cycads and palms."]},
{h:"A mystery: was Torosaurus a grown-up?", p:["Scientists still debate whether Torosaurus, a similar dinosaur with a larger frill that has big holes in it, was actually a fully grown Triceratops. The frill changed shape as the animal aged, and this question is not settled."]},
{h:"Common fossils", p:["Triceratops is one of the most common large dinosaurs found in the rocks of its time and place, so scientists have found many skulls and skeletons."]}
]});

Object.assign(byName("Stegosaurus"), {image:"stegosaurus-full.png", article:[
{h:"Meet the roof lizard", p:["Stegosaurus was named in 1877 by Othniel Charles Marsh. The name means “roof lizard”. Its fossils come from western North America, from rocks about 155 to 150 million years old. It is the state fossil of Colorado."]},
{h:"Size and body", p:["It was about 9 m (30 ft) long and weighed around 5 tonnes. Its front legs were short and its back legs were long, so its body sloped down toward its head, which it held low to the ground. Its head was small, and its brain was very small for the size of its body."]},
{h:"The back plates", p:["Along its back were about 17 large, thin plates of bone in two rows. Scientists still debate what they were for. They may have been used for display, for controlling body temperature, or both."], img:"stegosaurus-plates.png", cap:"The back plates of Stegosaurus"},
{h:"The thagomizer", p:["At the end of the tail were four sharp spikes, each up to about 60 cm (2 ft) long. This group of spikes is called a thagomizer, a name that came from a 1982 Far Side cartoon by Gary Larson. A fossil Allosaurus tailbone has a wound that matches a Stegosaurus spike, which suggests the spikes were used in defense."], img:"stegosaurus-spikes.png", cap:"The tail spikes called a thagomizer"},
{h:"What it ate", p:["Stegosaurus ate plants. It had a toothless beak at the front of its mouth and small leaf-shaped teeth behind it. It probably ate low plants such as ferns and cycads."]},
{h:"Older than you think", p:["Stegosaurus lived about 150 million years ago. That means the time between Stegosaurus and T. rex is longer than the time between T. rex and today."]}
]});

Object.assign(byName("Spinosaurus"), {image:"spinosaurus-full.png", article:[
{h:"Meet the spine lizard", p:["Spinosaurus was named in 1915 by the German paleontologist Ernst Stromer, from fossils found in Egypt. The name means “spine lizard”. It lived in North Africa about 99 to 93 million years ago. Stromer’s original fossils were destroyed in 1944, when a bombing raid hit the museum in Munich where they were kept."]},
{h:"A giant meat eater", p:["Spinosaurus was one of the longest meat-eating dinosaurs known. Estimates of its length run from about 12 to 18 m, and its exact size is still debated because no complete skeleton has been found."]},
{h:"The sail", p:["Tall bony spines grew from its back and held up a sail that may have been over 1.5 m high. Scientists still debate what the sail was for. Ideas include display, controlling body temperature, or both."], img:"spinosaurus-sail.png", cap:"The tall sail on the back of Spinosaurus"},
{h:"Head and teeth", p:["It had a long, narrow snout like a crocodile’s and straight, cone-shaped teeth, which are good for holding slippery prey such as fish. Its nostrils were set far back on the skull."], img:"spinosaurus-head.png", cap:"The long snout of Spinosaurus"},
{h:"Did it swim?", p:["Fossils found in Morocco and described in 2014 and 2020 led some scientists to think Spinosaurus had short hind legs and a paddle-shaped tail, and that it swam and hunted in water. Other scientists disagree and think it was more of a wading hunter. Chemical studies of spinosaur teeth suggest this group spent time in or near water. The debate is still open."]},
{h:"Its world", p:["Spinosaurus lived in a land of big rivers full of huge fish, including giant sawfish. It shared its home with other large meat-eating dinosaurs and with flying reptiles called pterosaurs."]}
]});

show();
