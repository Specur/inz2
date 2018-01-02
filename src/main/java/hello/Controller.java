package hello;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.Statistic;
import db.JDBCenter;
import dto.BundesLigaDTO;
import dto.ChampionsLeagueDTO;
import dto.League;
import dto.PremierLeagueDTO;
import dto.SerieADTO;
import statistic.Score;

@RestController
public class Controller {
	JDBCenter jdb = new JDBCenter();

	@CrossOrigin
	@RequestMapping("/all")
	public ArrayList<League> table(@RequestParam(value = "name", defaultValue = "premierLeague") String name,
								   @RequestParam(value = "date", defaultValue = "2017-18") String date) {
		if (name.equals("SerieA"))
			return jdb.findAllMatchByLeague(new SerieADTO(),date);
		if (name.equals("premierLeague"))
			return jdb.findAllMatchByLeague(new PremierLeagueDTO(),date);
		if (name.equals("ChampionsLeague"))
			return jdb.findAllMatchByLeague(new ChampionsLeagueDTO(),date);
		if (name.equals("bundesliga"))
			return jdb.findAllMatchByLeague(new BundesLigaDTO(),date);
		

		return jdb.findAllMatchByLeague(new SerieADTO(), date);
	}
	
	@CrossOrigin
	@RequestMapping("/team")
	public Score team(@RequestParam(value = "name", defaultValue = "bundesliga") String name,
					  @RequestParam(value = "teamName", defaultValue = "Wolfsburg") String teamName) {
		
		Statistic stat = new Statistic(teamName , jdb);
		League lg = null;
		if (name.equals("SerieA"))
			lg = new SerieADTO();
		if (name.equals("premierLeague"))
			lg = new PremierLeagueDTO();
		if (name.equals("ChampionsLeague"))
			lg = new ChampionsLeagueDTO();
		if (name.equals("bundesliga"))
			lg = new BundesLigaDTO();
		
		lg.setMaster(teamName);
		stat.init(lg);
		stat.findAll();
		
		return stat.getScore();
		
	}
	
	@CrossOrigin
	@RequestMapping("/getTeam")
	public Set<String> AllTeam(@RequestParam(value = "name", defaultValue = "bundesliga") String name) {
		Set<String> teams = new HashSet<String>();
		
		League lg = null;
		if (name.equals("SerieA"))
			lg = new SerieADTO();
		if (name.equals("premierLeague"))
			lg = new PremierLeagueDTO();
		if (name.equals("bundesliga"))
			lg = new BundesLigaDTO();
		
		
		teams = jdb.findAllTeam(lg);
		return teams;
		
		
	}
	
	
}
