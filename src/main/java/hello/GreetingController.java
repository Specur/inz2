package hello;

import java.util.ArrayList;

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

	@RequestMapping("/all")
	public ArrayList<League> greeting(@RequestParam(value = "name", defaultValue = "premierLeague") String name) {
		if (name == "SerieA")
			return new JDBCenter().findAllMatchByLeague(new SerieADTO());
		if (name == "premierLeague")
			return new JDBCenter().findAllMatchByLeague(new PremierLeagueDTO());
		if (name == "ChampionsLeague")
			return new JDBCenter().findAllMatchByLeague(new ChampionsLeagueDTO());

		return new JDBCenter().findAllMatchByLeague(new SerieADTO());
	}
}
