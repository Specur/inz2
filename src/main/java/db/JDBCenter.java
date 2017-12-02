package db;

import java.util.ArrayList;

import dto.League;
import io.jsondb.JsonDBTemplate;

public class JDBCenter {

	private String dbFilesLocation = "src/";

	private JsonDBTemplate jsonDBTemplate = new JsonDBTemplate(dbFilesLocation, "dto");

	public JDBCenter(Class clazz) {

		jsonDBTemplate.createCollection(clazz);

	}

	public JDBCenter() {

	}

	public <T> void insert(T match) {
		jsonDBTemplate.upsert(match);

	}

	public ArrayList<League> findAllMatchByTeam(League league) {
		String jxQuery = String.format("/.[guest = '%s' or master = '%s']", league.getMaster(), league.getMaster());
		return (ArrayList<League>) jsonDBTemplate.find(jxQuery, league.getClass());
	}

	public ArrayList<League> findAllMatchByLeague(League league) {

		return (ArrayList<League>) jsonDBTemplate.findAll(league.getClass());
	}

}