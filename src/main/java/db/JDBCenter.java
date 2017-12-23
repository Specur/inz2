package db;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import java.util.function.Consumer;

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

	public ArrayList<League> findAllMatchByLeague(League league ,String date) {
		String jxQuery = String.format("/.[date = '%s']",date);
		return (ArrayList<League>) jsonDBTemplate.find(jxQuery, league.getClass());
	}

	public Set<String> findAllTeam(League lg) {

		
		ArrayList<League> teams = (ArrayList<League>) jsonDBTemplate.findAll(lg.getClass());
		Set<String> allTeam = new HashSet<String>();
		for(League league : teams){
			allTeam.add(league.getMaster());
		}
		
		return allTeam;
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
}