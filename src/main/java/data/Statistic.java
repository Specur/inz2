package data;

import java.util.ArrayList;
import java.util.Set;

import db.JDBCenter;
import dto.BundesLigaDTO;
import dto.League;
import io.jsondb.annotation.Document;

@Document(collection = "bundesliga", schemaVersion = "1.0")
public class Statistic {
	static JDBCenter jdb = new JDBCenter();

	public static void main(String[] args) {

		League lg = new BundesLigaDTO();
		lg.setMaster("Hoffenheim");
		ArrayList<League> ar = jdb.findAllMatchByTeam(lg);
		System.out.println(ar.size());

	}
	
//	Set<String> TeamName(){
//		
//		jdb.findTeamName();
//		
//	}
}
