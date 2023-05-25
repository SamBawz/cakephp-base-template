<?php
?>

<div class="content">
	<my-element></my-element>
	<internal-styling></internal-styling>
	<child-components></child-components>
	<counting-seconds></counting-seconds>
	<reactive-attribute id="textChange" text="<?php echo "This text has been generated with PHP" ?>"></reactive-attribute>
	<title-container>
		<h2>This is a title</h2>
	</title-container>
	<title-container>
		<h1>Here's another title slot. It's easy to duplicate components with Lit</h1>
	</title-container>
	<table-component rows='[["head1", "head2", "head3"], ["r1c1", "r1c2", "r1c3"], ["r2c1", "r2c2", "r2c3"]]'></table-component>


<!--
DE VOLGENDE JSON SYNTAX IS GOED
	<table-component rows='[["head1", "head2", "head3"], ["r1c1", "r1c2", "r1c3"], ["r2c1", "r2c2", "r2c3"]]'></table-component>
	<participant-list participants='[{"name": "John", "role": "none"}, {"name": "Tessa", "role": "none"}'></participant-list>

DEZE NIET
	<table-component rows="[['head1', 'head2', 'head3'], ['r1c1', 'r1c2', 'r1c3']"></table-component>
	<participant-list participants='[{name: "John", role: "none"}, {name: "Tessa", role: "none"}'></participant-list>
-->
	<button-counter></button-counter>

	<div class="dropdown">
		<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
			Dropdown button
		</button>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a class="dropdown-item" href="#">Action</a>
			<a class="dropdown-item" href="#">Another action</a>
			<a class="dropdown-item" href="#">Something else here</a>
		</div>
	</div>

	<title-container>
		<bootstrap-dropdown>

		</bootstrap-dropdown>
	</title-container>

</div>

<script type="module" src="../js/components/my-element.js"></script>
<script type="module" src="../js/components/internal-styling.js"></script>
<script type="module" src="../js/components/child-components.js"></script>
<script type="module" src="../js/components/counting-seconds.js"></script>
<script type="module" src="../js/components/reactive-attribute.js"></script>
<script type="module" src="../js/components/table-component.js"></script>
<script type="module" src="../js/components/button-counter.js"></script>

<script type="module" src="../js/slots/title-container.js"></script>
<script type="module" src="../js/slots/bootstrap-dropdown.js"></script>

<script>
	setTimeout(() => {
		document.getElementById("textChange").setAttribute("text", "<?php echo "My reactive attribute has been changed and thus my content has changes as well!" ?>");
	}, 5000);
</script>


