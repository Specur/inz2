package hello;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import db.JDBCenter;
import dto.BundesLigaDTO;
import dto.ChampionsLeagueDTO;
import dto.League;
import dto.PremierLeagueDTO;
import dto.SerieADTO;

@RestController
public class GreetingController {

	@CrossOrigin
	@RequestMapping("/all")
	public ArrayList<League> greeting(@RequestParam(value = "name", defaultValue = "premierLeague") String name, @RequestParam(value = "date", defaultValue = "2017-18") String date) {
		if (name.equals("SerieA"))
			return new JDBCenter().findAllMatchByLeague(new SerieADTO(),date);
		if (name.equals("premierLeague"))
			return new JDBCenter().findAllMatchByLeague(new PremierLeagueDTO(),date);
		if (name.equals("ChampionsLeague"))
			return new JDBCenter().findAllMatchByLeague(new ChampionsLeagueDTO(),date);
		if (name.equals("bundesliga"))
			return new JDBCenter().findAllMatchByLeague(new BundesLigaDTO(),date);
		

		return new JDBCenter().findAllMatchByLeague(new SerieADTO(), date);
	}
}
