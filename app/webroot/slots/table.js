//Headers and content
//let rows = [["headbla", "headbla"], ["bla", "bla"], ["bla2", "bla2"]];
function Table({rows}) {
	return(
		<table>
			<thead>
			<tr>
				{
					rows[0].map((row, index) => (
						//About keys: https://legacy.reactjs.org/docs/lists-and-keys.html
						<th key={index}>{ row }</th>
					))
				}
			</tr>
			</thead>
			<tbody>
			{
				rows.map((row, index) => (
					//JS expressions https://legacy.reactjs.org/docs/conditional-rendering.html
					index > 0 &&
					<tr key={index}>
						{
							row.map((content, index) => (
								<td key={index}>{ content }</td>
							))
						}
					</tr>
				))
			}
			</tbody>
		</table>
	);
}

function DataRow({ rowContents }) {
	return (
		<tr>
			{
				rowContents.map(rowContent => (
					<td>{ rowContent }</td>
				))
			}
		</tr>
	);
}

function HeaderRow({ rowContents }) {
	return (
		<tr>
			{
				rowContents.map(rowContent => (
					<th>{ rowContent }</th>
				))
			}
		</tr>
	);
}
