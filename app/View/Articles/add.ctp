<form-container>
	<?php
	echo $this->Form->create('Article');
	echo $this->Form->input('title', array('label' => 'Titel'));
	echo $this->Form->input('body', array('type' => 'textarea','label' => 'Inhoud'));
	echo $this->Form->submit('Opslaan', array('cancel' => array('href'=>'/')));
	echo $this->Form->end();
	?>
</form-container>

<script type="module">
	import * as Slots from '../js/slots.js'
	Minze.defineAll(Slots)
</script>
