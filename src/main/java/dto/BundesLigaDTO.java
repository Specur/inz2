package dto;

import io.jsondb.annotation.Document;
import io.jsondb.annotation.Id;

@Document(collection = "bundesliga", schemaVersion = "1.0")
public class BundesLigaDTO extends League {

	@Id
	private int id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

}